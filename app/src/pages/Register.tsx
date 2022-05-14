// SVG, PNG, JPG
import iconGoogle from "../assets/icons/google-icon.png";

// Folha de estilos
import "../styles/login.scss";

// Componentes, Contextos, Hooks e Pages
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Illustration } from "../components/Illustration";

export function Register() {
  return (
    <div id="page-login">
      <Illustration></Illustration>
      <main>
        <div className="main-content">
          <button className="login-google">
            <img src={iconGoogle} alt="Logo do Google" />
          </button>
          <span className="separator">ou</span>
          <form>
            <div className="input-names">
              <input type="text" placeholder="Primeiro nome" />
              <input type="text" placeholder="Ultimo nome" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <span>
              <a href="google.com">Esqueceu a senha?</a>
            </span>
          </form>
        </div>
      </main>
      <div className="register-content">
        <p>Já tem uma conta?<Link className="link-register" to="/">Entre</Link></p>
      </div>
    </div>
  );
}
