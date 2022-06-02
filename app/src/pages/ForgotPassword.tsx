// React
import { Link, useHistory } from "react-router-dom";
import { FormEvent } from "react";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Illustration } from "../components/Illustration";
import { Notification, Toast } from "../components/utils/Notification";
import { UserAuth } from "../hooks/userAuth";

export function ForgotPassword() {
  const history = useHistory();
  const { resetPassword } = UserAuth();

  async function recoverPassword(event: FormEvent) {
    event.preventDefault();

    const email = event.currentTarget.getElementsByTagName("input")[0].value;
    const value = { email };

    if (!email) {
      Notification({
        type: "warn",
        message:
          "Digite um e-mail válido!",
      });
      return;
    }

    await resetPassword(value)
      .then(() => {
        Notification({
          type: "info",
          message:
            "Email enviado com sucesso! Você será redirecionado para o Login em 5 segundos...",
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
          <form onSubmit={recoverPassword}>
            <input type="text" name="email" placeholder="Email" />
            <Button type="submit">Enviar email</Button>
          </form>
          <Toast />
        </div>
      </main>
    </div>
  );
}
