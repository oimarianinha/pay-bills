// React
import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";

// SVG, PNG, JPG
import iconGoogle from "../assets/icons/google-icon.png";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Illustration } from "../components/Illustration";
import { UserAuth } from "../hooks/userAuth";
import { Notification, Toast } from "../components/utils/Notification";

export function Login() {
  const history = useHistory();
  const { user, loginWithEmailandPassword, signInWithGoogle } = UserAuth();
  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  async function authLogin(event: FormEvent) {
    event.preventDefault();

    const email = event.currentTarget.getElementsByTagName("input")[0].value;
    const senha = event.currentTarget.getElementsByTagName("input")[1].value;

    const value = {
      email,
      senha,
    };

    if (!email) {
      Notification({
        type: "warn",
        message:
          "Digite um e-mail válido!",
      });
      return;
    }

    if (!senha) {
      Notification({
        type: "warn",
        message:
          "Digite uma senha!",
      });
      return;
    }

    await loginWithEmailandPassword(value)
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        const message = translationFirebaseErrorsPTBR(error.code);
        Notification({
          type: "error",
          message: `${message}`,
        });
      });
  }

  async function authLoginGoogle() {
    if (!user) {
      await signInWithGoogle()
        .then(() => {
          history.push("/home");
        })
        .catch((error) => {
          const message = translationFirebaseErrorsPTBR(error.code);
          Notification({
            type: "error",
            message: `${message}`,
          });
        });
    }
  }

  return (
    <div id="page-login">
      <Illustration></Illustration>
      <main>
        <div className="register-content">
          <p>
            Ainda não tem uma conta?{" "}
            <Link className="link-register" to="/register">
              Cadastre-se
            </Link>
          </p>
        </div>
        <div className="main-content">
          <button className="login-google" onClick={authLoginGoogle}>
            <img src={iconGoogle} alt="Logo do Google" />
          </button>
          <div className="separator">ou</div>
          <form onSubmit={authLogin}>
            <input type="text" name="email" placeholder="Email" />
            <div className="pass">
              <input
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Senha"
              />
              <i
                className={
                  isShown
                    ? "fa fa-eye password-icon"
                    : "fa fa-eye-slash password-icon"
                }
                aria-hidden="true"
                onClick={togglePassword}
              />
            </div>
            <Button type="submit">Entrar</Button>
            <span>
              <Link to="/forgot-password">Esqueceu a senha?</Link>
            </span>
          </form>
          <Toast />
        </div>
      </main>
    </div>
  );
}
