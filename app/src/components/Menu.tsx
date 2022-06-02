// React
import { Link } from "react-router-dom";

// SVG, PNG, JPG
import logo from "../assets/images/logo.svg";

export function Menu() {
  const titleMenu = [
    {
      path: "/home",
      title: "Dashboard",
      icon: "fa fa-table-columns",
    },
    {
      path: "/despesas",
      title: "Despesas",
      icon: "fa fa-pencil",
    },
    {
      path: "/receitas",
      title: "Receitas",
      icon: "fa fa-chart-pie",
    },
    {
      path: "/investimentos",
      title: "Investimentos",
      icon: "fa fa-money-bill-trend-up",
    },
    {
      path: "/agenda",
      title: "Agenda",
      icon: "fa fa-address-book",
    },
    {
      path: "/metas",
      title: "Metas",
      icon: "fa fa-bullseye",
    },
    {
      path: "/relatorios",
      title: "Relatórios",
      icon: "fa fa-book-open",
    },
    {
      path: "/usuarios",
      title: "Usuários",
      icon: "fa fa-users",
    },
    {
      path: "/faq",
      title: "FAQ",
      icon: "fa fa-circle-question",
    },
  ];

  return (
    <div className="content-menu">
      <div>
        {" "}
        <Link to="/home"><img src={logo} alt="Logo do sistema Pay Bills" /></Link>
      </div>
      <div className="separator"></div>
      <div className="menu-items">
        <ul>
          {titleMenu.map((item) => {
            return (
              <li>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="content-footer">
        <p>Versão 1.0</p>
      </footer>
    </div>
  );
}
