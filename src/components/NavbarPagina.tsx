import React from "react";
import logo from "../img/logo.png";
const NavbarPagina = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          width="177"
          height="44"
          className="d-inline-block align-text-top"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Examenes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Iniciar Sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPagina;
