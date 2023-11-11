import React from "react";
import NavbarPagina from "../components/NavbarPagina";
import "./Estilo.css";
import sangre from "../img/sangre.png";
import orina from "../img/oringa.png";
import heces from "../img/heces.png";
import covid from "../img/covid.png";
import saliva from "../img/saliba.png";
import examenes from "../img/examenes.png";
const Landigspage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarPagina />
        <div className="container-fluid fondo tamadiv">
          <div className="boton">
            <a href="">Explorar</a>{" "}
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4 margen">
          <h2 className="text-center servicio">Nuestros Servicios</h2>
          <p className="text-center p">
            En LabExpress, nuestra misión es mejorar la salud y el bienestar de
            nuestros pacientes a través de diagnósticos precisos y servicios de
            laboratorio confiables. Como líderes en el campo de la medicina
            diagnóstica, nos enorgullece ofrecer una amplia gama de servicios de
            laboratorio clínico de vanguardia que apoyan a médicos, pacientes y
            comunidades en general.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-1">
            <img src={sangre} alt="" />
            <p>Exámen de sangre</p>
          </div>
          <div className="col-md-1">
            <img src={orina} alt="" />
            <p>Exámen de Orina</p>
          </div>
          <div className="col-md-1">
            <img src={heces} alt="" />
            <p>Exámen de Heces</p>
          </div>
          <div className="col-md-1">
            <img src={covid} alt="" />
            <p>Exámen de Covid</p>
          </div>
          <div className="col-md-1">
            <img src={saliva} alt="" />
            <p>Exámen de Saliva</p>
          </div>
        </div>
        <div className="row fondoequipo">
          <div className="col-md-6">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <h2>Nuestro Equipo</h2>
              <p>
                Está compuesto por profesionales altamente capacitados en el
                campo de la medicina y la tecnología de laboratorio. Cada
                miembro del equipo comparte nuestra pasión por la salud y la
                excelencia en el servicio al paciente.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src={examenes}
              alt=""
              style={{ width: "482px", height: "366px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landigspage;
