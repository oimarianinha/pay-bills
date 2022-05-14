// SVG, PNG, JPG
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png"

// Folha de estilos
import "../styles/home.scss";

// Componentes, Contextos, Hooks e Pages

export function Home() {
  return (
    <div id="page-home">
      <div className="content-menu">
        <img src={logo} alt="Logo do sistema Pay Bills" />
        <div className="separator"></div>
        <div className="menu-items">
          <ul>
            <li>Dashboard</li>
            <li>Despesas</li>
            <li>Receitas</li>
            <li>Investimentos</li>
            <li>Agenda</li>
            <li>Metas</li>
            <li>Relatórios</li>
            <li>Usuários</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="content-footer">
          <p>Versao 1.0</p>
        </div>
      </div>
      <main>
        <div className="avatar">
          <img src={avatar}></img>
        </div>
        <div className="separator"></div>
        <div className="bills-content">
          <div className="income">
            <span>RECEITAS</span>
            <p>R$ 4.569,90</p>
          </div>
          <div className="outgoing">
            <span>DESPESAS</span>
            <p>R$ 3.500,00</p>
          </div>
        </div>
      </main>
    </div>
  );
}
