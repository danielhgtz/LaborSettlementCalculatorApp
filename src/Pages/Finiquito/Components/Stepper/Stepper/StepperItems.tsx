import React, { useEffect, useState } from "react";
import { useStepper } from "../../../../../helper/Context";

export const StepperItems = () => {
  const { setMaxNumber } = useStepper();
  const stepperItems = [
    { title: "Salario" },
    {
      title: "Ingreso/Salida",
    },
    {
      title: "Vacaciones",
    },
    {
      title: "Aguinaldo",
    },
    { title: "Fondo de Ahorro" },
    { title: "Prestaciones Extras" },
    { title: "Resultados" },
  ];

  useEffect(() => {
    setMaxNumber(stepperItems.length - 1);
  }, [stepperItems]);

  return stepperItems;
};
