import React from "react";
import { usePrimeraFecha, useSegundaFecha } from "../../../../helper/Context";

export const CalendarTotalTime = ({ años, meses, dias }: any) => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  let calendarTotalTime;
  let mensajeAños;
  let mensajeMeses;
  let mensajeDias;

  if (años === 0 || años > 1) {
    mensajeAños = "Años";
  } else {
    mensajeAños = "Año";
  }

  if (meses === 0 || meses > 1) {
    mensajeMeses = "Meses";
  } else {
    mensajeMeses = "Mes";
  }

  if (dias === 0 || dias > 1) {
    mensajeDias = "Días";
  } else {
    mensajeDias = "Día";
  }

  if (primeraFechaContext && segundaFechaContext) {
    calendarTotalTime = `${años} ${mensajeAños}, ${meses} ${mensajeMeses} y ${dias} ${mensajeDias}`;
  }

  return (
    <div>
      <p>{calendarTotalTime}</p>
    </div>
  );
};
