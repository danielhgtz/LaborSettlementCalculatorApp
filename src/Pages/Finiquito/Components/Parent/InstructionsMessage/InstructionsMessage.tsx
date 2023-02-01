import { useState, useEffect } from "react";
import { useStepper } from "../../../../../helper/Context";
import "./InstructionsMessage.css";

export const InstructionsMessage = () => {
  const { number } = useStepper();
  const [intructionMessage, setInstructionMessage] = useState<string>();

  useEffect(() => {
    if (number === 0) {
      setInstructionMessage("Llena los siguientes datos");
    } else if (number === 1) {
      setInstructionMessage("Ingresa tu fecha de Ingreso y de Salida:");
    } else if (number === 2) {
      setInstructionMessage("Ingresa tus días de Vacaciones restantes:");
    } else if (number === 3) {
      setInstructionMessage("Ingresa los días de Aguinaldo que te pagarán:");
    } else if (number === 4) {
      setInstructionMessage(
        "Ingresa el porcentaje de Fondo de Ahorro con el que cuentes (opcional):"
      );
    } else if (number === 5) {
      setInstructionMessage(
        "Ingresa alguna Prestación Adicional con la que cuentes:"
      );
    } else {
      setInstructionMessage("");
    }
  }, [number]);

  return (
    <div className="instructionMessageBox">
      <p>{intructionMessage}</p>
    </div>
  );
};
