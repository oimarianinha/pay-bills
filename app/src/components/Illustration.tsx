// SVG, PNG, JPG
import logo from "../assets/images/logo.svg";
import computerIlustration from "../assets/images/computer.png";

export function Illustration(){
    return (<aside>
        <img src={logo} alt="Logo do sistema Pay Bills" />
        <img src={computerIlustration} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>
          Controle suas contas <br></br>de um só lugar
        </strong>
        <p>
          Pague suas contas, veja suas economias
          <br></br>e adicione integrantes da família para
          <br></br>acompanhar e realizar pagamentos!
        </p>
      </aside>);
}