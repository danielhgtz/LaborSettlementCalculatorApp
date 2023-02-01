import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  useSCD,
  usePrimeraFecha,
  useSegundaFecha,
  usePrimaDeAntiguedad,
} from "../../../../helper/Context";

export const PrimaDeAntiguedadOperations = ({ años, meses, dias }: any) => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const { SCD } = useSCD();
  const { totalDineroPrima, setTotalDineroPrima } = usePrimaDeAntiguedad();
  const [mensaje, setMensaje] = useState<any>();

  let show: boolean = false;

  let SCDTopado: number;

  if (SCD <= 125) {
    SCDTopado = 125;
  } else if (SCD >= 250) {
    SCDTopado = 250;
  } else {
    SCDTopado = SCD;
  }

  const totalDiasPrima = años * 12 + meses * 1 + dias * 0.033;
  useEffect(() => {
    if (años >= 15) {
      setTotalDineroPrima(totalDiasPrima * SCDTopado);
      setMensaje(
        ` La relación laboral duró más de 15 años y equivale a ${totalDiasPrima} Días y correponde a $${totalDineroPrima} de pago de Prima de Antiguedad.`
      );
    } else {
      setMensaje(" Menos de 15 años.");
    }
  }, [totalDiasPrima]);

  if (primeraFechaContext && segundaFechaContext && SCD) {
    show = true;
  } else {
    show = false;
  }

  // const primeraFechaResult = primeraFechaMoment.format("MMMM Do YYYY");
  // const segundaFechaResult = segundaFechaMoment.format("MMMM Do YYYY");

  return (
    <div>
      Prima de Antiguedad:
      {show ? mensaje : null}
    </div>
  );
};
