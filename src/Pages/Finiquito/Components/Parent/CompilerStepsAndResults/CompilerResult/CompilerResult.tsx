import React from "react";
import { AguinaldoOperations } from "../../../Aguinaldo/AguinaldoOperations";
import { CalendarTotalTime } from "../../../Calendar/CalendarTotalTime";
import { FondoDeAhorroMessage } from "../../../FondoDeAhorro/FondoDeAhorroOperations";
import { PrimaDeAntiguedadOperations } from "../../../PrimaDeAntiguedad/PrimaDeAntiguedadOperaciones";
import { SalarioProporcional } from "../../../Salario/Results/SalarioProporcional";
import { SCDResult } from "../../../Salario/Results/SCDResult";
import { Total } from "../../../Total/Total";
import { VacationOperations } from "../../../Vacaciones/VacationOperations";
import "./CompilerResult.css";

import calendar from "../../../../../../Assets/img/calendar.png";
import money from "../../../../../../Assets/img/money.png";
import vacations from "../../../../../../Assets/img/vacaciones.png";
import aguinaldo from "../../../../../../Assets/img/aguinaldo.png";
import antiguedad from "../../../../../../Assets/img/antiguedad.png";
import ahorro from "../../../../../../Assets/img/ahorro.png";

export const CompilerResults = ({
  años,
  meses,
  dias,
  primerDia,
  primerAño,
  ultimoAño,
  ultimoDia,
  ultimoDiaPorMes,
  primeraFecha,
  segundaFecha,
  diasAlAñoSegundaFecha,
  diasTrabajadosUltimoAño,
}: any) => {
  return (
    <div>
      {/* <div className="SCDResult">
        <Total />
      </div> */}

      <div className="container">
        <div className="colum">
          <div className="column1">
            <div className="containerInnerDiv">
              <img className="image" src={calendar} />
              <div className="titleDiv">
                <p className="title">Duración de la Relación Laboral</p>

                <div className="results">
                  <CalendarTotalTime años={años} meses={meses} dias={dias} />
                </div>
              </div>
            </div>

            <div className="containerInnerDiv">
              <img className="image" src={money} />
              <div className="titleDiv">
                <p className="title">Salario </p>

                <div className="results">
                  <SCDResult />
                  <SalarioProporcional
                    primerDia={primerDia}
                    primerAño={primerAño}
                    ultimoAño={ultimoAño}
                    ultimoDia={ultimoDia}
                    ultimoDiaPorMes={ultimoDiaPorMes}
                    primeraFecha={primeraFecha}
                    segundaFecha={segundaFecha}
                  />
                </div>
              </div>
            </div>

            <div className="containerInnerDiv">
              <img className="image" src={vacations} />
              <div className="titleDiv">
                <p className="title">Vacaciones</p>

                <div className="results">
                  <VacationOperations
                    segundaFecha={segundaFecha}
                    diasAlAñoSegundaFecha={diasAlAñoSegundaFecha}
                    diasTrabajadosUltimoAño={diasTrabajadosUltimoAño}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="containerInnerDiv">
              <img className="image" src={aguinaldo} />
              <div className="titleDiv">
                <p className="title">Aguinaldo</p>

                <div className="results">
                  <AguinaldoOperations
                    diasTrabajadosUltimoAño={diasTrabajadosUltimoAño}
                    diasAlAñoSegundaFecha={diasAlAñoSegundaFecha}
                  />
                </div>
              </div>
            </div>
            <div className="containerInnerDiv">
              <img className="image" src={antiguedad} />
              <div className="titleDiv">
                <p className="title">Prima de Antiguedad</p>

                <div className="results">
                  <PrimaDeAntiguedadOperations
                    años={años}
                    meses={meses}
                    dias={dias}
                  />
                </div>
              </div>
            </div>

            <div className="containerInnerDiv">
              <img className="image" src={ahorro} />
              <div className="titleDiv">
                <p className="title">Fondo de Ahorro</p>

                <div className="results">
                  <FondoDeAhorroMessage
                    diasAlAñoSegundaFecha={diasAlAñoSegundaFecha}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
