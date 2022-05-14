// React
import { createContext, ReactNode, useState, useEffect } from "react";

// Google Firebase
import { firebase, auth } from "../services/firebase";

type UserType = {
  id: string;
  user_email: string | null;
};
type AuthContextType = {
  user: UserType | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderPropsType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderPropsType) {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;

        if (!email) {
          throw new Error("Informações faltantes na conta do Google");
        }

        setUser({
          id: uid,
          user_email: email
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { email, uid } = result.user;

      setUser({
        id: uid,
        user_email: email,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
