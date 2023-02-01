import React, { useState, useEffect } from "react";
import { CalendarInput } from "./CalendarInput";

import { usePrimeraFecha, useSegundaFecha } from "../../../../helper/Context";
import "./Calendar.css";

//Parent

const Calendar = () => {
  const [primeraFecha, setPrimeraFecha] = useState<Date | string>("");
  const [segundaFecha, setSegundaFecha] = useState<Date | string>("");
  const { primeraFechaContext, handlePrimeraFechaChange } = usePrimeraFecha();
  const { segundaFechaContext, handleSegundaFechaChange } = useSegundaFecha();

  useEffect(() => {
    handlePrimeraFechaChange(primeraFecha);
  }, [primeraFecha]);

  useEffect(() => {
    handleSegundaFechaChange(segundaFecha);
  }, [segundaFecha]);

  return (
    <div className="mainCalendarDiv">
      <div className="boxFechaDeEntrada">
        <CalendarInput
          titulo="Fecha de Entrada"
          fecha={primeraFecha}
          setFecha={setPrimeraFecha}
        />
      </div>
      <div className="boxFechaDeSalida">
        <CalendarInput
          titulo="Fecha de Salida"
          fecha={segundaFecha}
          setFecha={setSegundaFecha}
        />
      </div>
    </div>
  );
};
export default Calendar;
