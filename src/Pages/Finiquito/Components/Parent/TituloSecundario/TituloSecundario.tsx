import React, { useEffect, useState } from "react";
import { useStepper } from "../../../../../helper/Context";
import { StepperItems } from "../../Stepper/Stepper/StepperItems";
import "./TituloSecundario.css";

export const TituloSecundario = () => {
  const { number } = useStepper();
  const [titulo, setTitulo] = useState<string>(StepperItems()[0].title);

  const titleDeclaration = StepperItems()[number].title;

  useEffect(() => {
    if (number >= 0) {
      setTitulo(titleDeclaration);
    } else {
      setTitulo("error");
    }
  }, [number]);

  return (
    <div>
      <h1 className="tituloSecundario">{titulo}</h1>
    </div>
  );
};
