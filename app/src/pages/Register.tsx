//React
import { useHistory } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";


// SVG, PNG, JPG
import iconGoogle from "../assets/icons/google-icon.png";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Illustration } from "../components/Illustration";
import { Notification, Toast } from "../components/utils/Notification";
import { UserAuth } from "../hooks/userAuth";

export function Register() {
  const [isShown, setIsSHown] = useState(false);
  const { user, registerWithEmailAndPassword } = UserAuth();
  const history = useHistory();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  async function registerUser(event: FormEvent) {
    event.preventDefault();
    const firstName =
      event.currentTarget.getElementsByTagName("input")[0].value;
    const lastName = event.currentTarget.getElementsByTagName("input")[0].value;
    const email = event.currentTarget.getElementsByTagName("input")[2].value;
    const senha = event.currentTarget.getElementsByTagName("input")[3].value;

    const value = {
      firstName,
      lastName,
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

    if (!user) {
      await registerWithEmailAndPassword(value)
        .then(() => {
          Notification({
            type: "success",
            message:
              "Cadastro realizado com sucesso! Você será redirecionado para o login em 5 segundos...",
          });
          setTimeout(() => {
            history.push("/");
          }, 5000);
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
            Já tem uma conta?{" "}
            <Link className="link-register" to="/">
              Entre
            </Link>
          </p>
        </div>
        <div className="main-content">
          <button className="login-google">
            <img src={iconGoogle} alt="Logo do Google" />
          </button>
          <span className="separator">ou</span>
          <form onSubmit={registerUser}>
            <div className="input-names">
              <input
                type="text"
                name="first_name"
                placeholder="Primeiro nome"
              />
              <input type="text" name="last_name" placeholder="Ultimo nome" />
            </div>
            <input type="text" placeholder="Email" />
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
            <Button type="submit">Cadastrar</Button>
          </form>
          <Toast />
        </div>
      </main>
    </div>
  );
}
