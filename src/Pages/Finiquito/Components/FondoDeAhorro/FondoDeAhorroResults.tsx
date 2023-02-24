import {
  useFondoDeAhorro,
  usePrimeraFecha,
  useSCD,
  useSegundaFecha,
} from "../../../../helper/Context";
import {
  ParseFloatToTwoDecimals,
  ParseFloatTwoDecimalsNumber,
} from "../../../../Utilities/Utilities";
import { useEffect, useState } from "react";
import { DecToDec, DiasMessage } from "./Utilities";

export const FondoDeAhorroResults = ({ diasAlAñoSegundaFecha }: any) => {
  const {
    salarioContext,
    salarioRestanteFondoDeAhorro,
    setSalarioRestanteFondoDeAhorro,
  } = useSCD();
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const {
    fondoDeAhorroProporcional,
    setFondoDeAhorroProporcional,
    fondoDeAhorroPorcentaje,
    booleanFA,
  } = useFondoDeAhorro();

  const totalDiasFondoDeAhorro: number = DecToDec();

  const fondoDeAhorroMensual: number | undefined =
    salarioContext * fondoDeAhorroPorcentaje * 2;

  const fondoDeAhorroAnual: number = fondoDeAhorroMensual * 12;

  const resultadoFondoDeAhorroAnual: number =
    ParseFloatTwoDecimalsNumber(fondoDeAhorroAnual);

  const resultadoFondoDeAhorroProporcional = ParseFloatToTwoDecimals(
    fondoDeAhorroProporcional
  );

  const FAProporcional = ParseFloatTwoDecimalsNumber(
    fondoDeAhorroAnual / diasAlAñoSegundaFecha
  );

  useEffect(() => {
    if (fondoDeAhorroPorcentaje > 0) {
      setSalarioRestanteFondoDeAhorro(
        ParseFloatToTwoDecimals(
          salarioContext - salarioContext * fondoDeAhorroPorcentaje
        )
      );
    }
  }, [fondoDeAhorroPorcentaje, booleanFA]);

  useEffect(() => {
    if (booleanFA && fondoDeAhorroAnual) {
      setFondoDeAhorroProporcional(FAProporcional * totalDiasFondoDeAhorro);
    } else {
      setFondoDeAhorroProporcional(0);
    }
  }, [
    booleanFA,
    segundaFechaContext,
    primeraFechaContext,
    salarioContext,
    fondoDeAhorroPorcentaje,
  ]);

  const diaMessage = DiasMessage();

  const notApplicableMessage: string | undefined =
    "Fondo de Ahorro no aplicable.";

  return (
    <div>
      {fondoDeAhorroPorcentaje ? (
        <div>
          <p>Total Fondo de Ahorro al Año: ${resultadoFondoDeAhorroAnual}.</p>
          <p>
            {totalDiasFondoDeAhorro} {diaMessage} de Fondo de Ahorro.
          </p>
          <p>Fondo de Ahorro proporcional diario ${FAProporcional}.</p>
          <p>
            Monto de Fondo de Ahorro Proporcional:
            <strong> ${resultadoFondoDeAhorroProporcional}</strong>.
          </p>
        </div>
      ) : (
        <p>{notApplicableMessage}</p>
      )}
    </div>
  );
};
