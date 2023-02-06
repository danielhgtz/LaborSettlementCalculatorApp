import { InputSalario } from "./InputSalario";
import { ModalidadDePagoComponent } from "./ModalidadDePagoSalario";
import "./Salario.css";

export const InputSalarioFinalComponent = ({ ultimoDiaPorMes }: any) => {
  return (
    <div>
      <div className="salarioFinalDiv">
        <div className="firstBoxModalidadDePago">
          <ModalidadDePagoComponent ultimoDiaPorMes={ultimoDiaPorMes} />
          <p>*Ingresa la forma en la que te pagan tu salario</p>
        </div>
        <div className="secondtBoxModalidadDePago">
          <InputSalario ultimoDiaPorMes={ultimoDiaPorMes} />
          <p>*Ingresa cuánto ganas al Mes</p>
        </div>
      </div>
    </div>
  );
};
