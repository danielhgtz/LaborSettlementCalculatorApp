import React, { useEffect } from "react";
import {
  useVacation,
  useSCD,
  usePrimeraFecha,
  useSegundaFecha,
} from "../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../Utilities/Utilities";

export const VacationOperations = ({
  diasAlAñoSegundaFecha,
  diasTrabajadosUltimoAño,
}: any) => {
  const {
    vacationDays,
    proportionalVacationResult,
    setProportionalVacationResult,
    primaVacacional,
    setPrimaVacacional,
  } = useVacation();
  const { SCD } = useSCD();
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  let vacacionesProporcionales: number | undefined = 0;

  if (primeraFechaContext && segundaFechaContext && SCD && vacationDays) {
    vacacionesProporcionales =
      (vacationDays / diasAlAñoSegundaFecha) * diasTrabajadosUltimoAño;
  }
  useEffect(() => {
    if (vacacionesProporcionales) {
      setProportionalVacationResult(vacacionesProporcionales * SCD);
      setPrimaVacacional(proportionalVacationResult * 0.25);
    }
  }, [vacacionesProporcionales]);

  const diasDeVacacionesProporcionales = ParseFloatToTwoDecimals(
    vacacionesProporcionales
  );

  const resultadoVacacionesProporcionales = ParseFloatToTwoDecimals(
    proportionalVacationResult
  );

  const resultadoPrimaVacacional = ParseFloatToTwoDecimals(primaVacacional);

  return (
    <div>
      <p>Vacaciones: {vacationDays}</p>
      <p>Días de Vacaciones Proporcionales {diasDeVacacionesProporcionales}</p>
      <p>Vacaciones Proporcionales: ${resultadoVacacionesProporcionales}</p>
      <p>Prima Vacacional: ${resultadoPrimaVacacional}</p>
    </div>
  );
};
