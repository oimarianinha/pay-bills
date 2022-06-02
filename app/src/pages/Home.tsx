// SVG, PNG, JPG
import grafico from "../assets/images/grafico.png";
import avatar from "../assets/images/avatar.png";

// Folha de estilos
import "../styles/home.scss";
import "../styles/menu.scss";

// Componentes, Contextos, Hooks e Pages
import { Menu } from "../components/Menu";
import { TableDespesas } from "../components/TableDespesas";

export function Home() {
  return (
    <div id="page-home">
      <Menu></Menu>
      <main>
        <nav>
          <div className="avatar">
            <img alt="Avatar do perfil" src={avatar}></img>
          </div>
        </nav>
        <div className="separator"></div>
        <div className="bills-content">
          <div className="income">
            <span>
              <i className="fas fa-arrow-square-up"></i> RECEITAS
            </span>
            <p>R$ 4.569,90</p>
          </div>
          <div className="outgoing">
            <span>
              <i className="fa-solid fa-arrow-down"></i> DESPESAS
            </span>
            <p>R$ 3.500,00</p>
          </div>
        </div>
        <div id="graphic">
          <img src={grafico} />
        </div>
        <TableDespesas />
      </main>
    </div>
  );
}
