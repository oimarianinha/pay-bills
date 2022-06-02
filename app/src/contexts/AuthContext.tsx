// React
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  FormEvent,
} from "react";

// Firebase
import { firebase } from "../services/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

type UserType = {
  id: string;
  email: string | null;
};

type AuthContextType = {
  user: UserType | undefined;
  registerWithEmailAndPassword: (props: UserRegister) => Promise<void>;
  loginWithEmailandPassword: (props: UserAuth) => Promise<void>;
  resetPassword: (props: UserReset) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderPropsType = {
  children?: ReactNode;
};

type UserAuth = {
  email: string;
  senha: string;
};

type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  senha: string;
};

type UserReset = {
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderPropsType) {
  const [user, setUser] = useState<UserType>();
  const auth = getAuth(firebase);

  // useEffect(() => auth.onAuthStateChanged(setUser), []);

  async function registerWithEmailAndPassword(props: UserRegister) {
    await createUserWithEmailAndPassword(
      auth,
      props.email,
      props.senha
    );
  }

  async function resetPassword(props: UserReset) {
    await sendPasswordResetEmail(auth, props.email);
  }

  async function loginWithEmailandPassword(props: UserAuth) {
    await signInWithEmailAndPassword(
      auth,
      props.email,
      props.senha
    )
    // const { uid, email } = login.user;

    // if (!email){
    //   throw new Error("Informações faltantes na conta");
    // }

    // setUser({
    //   id: uid,
    //   email: email,
    // });
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const { uid, email } = result.user;
      setUser({
        id: uid,
        email: email,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        registerWithEmailAndPassword,
        loginWithEmailandPassword,
        resetPassword,
        signInWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
