// React
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

// SVG, PNG, JPG
import iconGoogle from "../assets/icons/google-icon.png";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Illustration } from "../components/Illustration";
import { UserAuth } from "../hooks/userAuth";

//Firebase
import { database } from "../services/firebase";

export function Login() {
  const history = useHistory();
  const { user, signInWithGoogle } = UserAuth();

  async function authLogin(event: FormEvent) {
    event.preventDefault();

    if (!user) {
      await signInWithGoogle();
    }

    const userReference = database.ref("users");
    const firebaseUser = await userReference.push({
      email: event.target,
      senha: event.target,
    });

    history.push(`/users/${firebaseUser.key}`);
  }
  return (
    <div id="page-login">
      <Illustration></Illustration>
      <main>
        <div className="main-content">
          <button className="login-google">
            <img src={iconGoogle} alt="Logo do Google" />
          </button>
          <div className="separator">ou</div>
          <form onSubmit={authLogin}>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <span>
              <a href="">Esqueceu a senha?</a>
            </span>
          </form>
        </div>
      </main>
      <div className="register-content">
        <p>
          Ainda não tem uma conta?{" "}
          <Link className="link-register" to="/register">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
