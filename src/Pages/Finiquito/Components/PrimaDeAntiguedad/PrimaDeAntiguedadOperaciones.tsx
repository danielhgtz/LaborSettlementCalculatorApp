import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  useSCD,
  usePrimeraFecha,
  useSegundaFecha,
  usePrimaDeAntiguedad,
} from "../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../Utilities/Utilities";

export const PrimaDeAntiguedadOperations = ({ años, meses, dias }: any) => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const { SCD } = useSCD();
  const { totalDineroPrima, setTotalDineroPrima } = usePrimaDeAntiguedad();

  let SCDTopado: number;
  let mensaje: string = " Prima de Antiguedad no aplicable (Menos de 15 años).";
  const totalDiasPrima = años * 12 + meses * 1 + dias * 0.033;
  const resultadoTotalDineroPrima = ParseFloatToTwoDecimals(totalDineroPrima);

  if (SCD <= 125) {
    SCDTopado = 125;
  } else if (SCD >= 250) {
    SCDTopado = 250;
  } else {
    SCDTopado = SCD;
  }

  useEffect(() => {
    setTotalDineroPrima(totalDiasPrima * SCDTopado);
  }, [primeraFechaContext, segundaFechaContext, SCD]);

  if (años >= 15) {
    mensaje = ` La relación laboral duró más de 15 años y equivale a ${totalDiasPrima} Días y correponde a $${resultadoTotalDineroPrima} de pago de Prima de Antiguedad.`;
  }

  // const primeraFechaResult = primeraFechaMoment.format("MMMM Do YYYY");
  // const segundaFechaResult = segundaFechaMoment.format("MMMM Do YYYY");

  return <div>{mensaje}</div>;
};
