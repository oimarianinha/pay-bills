//React
import { useState } from "react";

// SVG, PNG, JPG
import iconGoogle from "../assets/icons/google-icon.png";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Illustration } from "../components/Illustration";

export function Register() {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

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
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-names">
              <input type="text" placeholder="Primeiro nome" />
              <input type="text" placeholder="Ultimo nome" />
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
            <Button type="submit">Entrar</Button>
            <span>
              <a href="google.com">Esqueceu a senha?</a>
            </span>
          </form>
        </div>
      </main>
    </div>
  );
}
