import {
  useFondoDeAhorro,
  usePrimeraFecha,
  useSCD,
  useSegundaFecha,
} from "../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../Utilities/Utilities";
import { useEffect, useState } from "react";
import { DecToDec } from "./Utilities";

export const FondoDeAhorroMessage = ({ diasAlAñoSegundaFecha }: any) => {
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

  const resultadoFondoDeAhorroAnual: string =
    ParseFloatToTwoDecimals(fondoDeAhorroAnual);

  const resultadoFondoDeAhorroProporcional = ParseFloatToTwoDecimals(
    fondoDeAhorroProporcional
  );

  //!const FAProporciona = fondoDeAhorroAnual / diasAlAñoSegundaFecha;

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
      setFondoDeAhorroProporcional(
        (fondoDeAhorroAnual / diasAlAñoSegundaFecha) * totalDiasFondoDeAhorro
      );
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

  const notApplicableMessage: string | undefined =
    "Fondo de Ahorro no aplicable.";

  return (
    <div>
      {fondoDeAhorroPorcentaje ? (
        <div>
          <p>Total Fondo de Ahorro al Año: ${resultadoFondoDeAhorroAnual}.</p>
          <p>
            Monto de Fondo de Ahorro Proporcional: $
            {resultadoFondoDeAhorroProporcional}.
          </p>
          <p>Por {totalDiasFondoDeAhorro} DÍA de Fondo de Ahorro.</p>
        </div>
      ) : (
        <p>{notApplicableMessage}</p>
      )}
    </div>
  );
};

// export const Calculo = (
//   fondoDeAhorroPorcentaje: any,
//   booleanFA: boolean | undefined
// ) => {
//   const { salarioContext } = useSCD();
//   const { primeraFechaContext } = usePrimeraFecha();
//   const { segundaFechaContext } = useSegundaFecha();
//   const { fondoDeAhorroProporcional } = useFondoDeAhorro();

//   const [fondoDeAhorroAnual, setFondoDeAhorroAnual] = useState<any>();
//   const [resultadoFondoDeAhorroAnual, setResultadoFondoDeAhorroAnual] =
//     useState<string>();
//   const [resultadoFondoDeAhorroRestante, setResultadoFondoDeAhorroRestante] =
//     useState<string>();
//   const [
//     resultadoFondoDeAhorroProporcional,
//     setResultadoFondoDeAhorroProporcional,
//   ] = useState<string>();

//   const [mensaje, setMensaje] = useState<string>("");
//   const totalDiasFondoDeAhorro: number = NovToNov();

//   useEffect(() => {
//     setResultadoFondoDeAhorroProporcional(
//       ParseFloatToTwoDecimals(fondoDeAhorroProporcional)
//     );
//     const fondoDeAhorroMensual = salarioContext * fondoDeAhorroPorcentaje * 2;
//     setFondoDeAhorroAnual(fondoDeAhorroMensual * 12);

//     setResultadoFondoDeAhorroAnual(ParseFloatToTwoDecimals(fondoDeAhorroAnual));

//     setResultadoFondoDeAhorroRestante(
//       ParseFloatToTwoDecimals(
//         salarioContext - salarioContext * fondoDeAhorroPorcentaje
//       )
//     );

//     setMensaje(` Total Fondo de Ahorro al Año: $${resultadoFondoDeAhorroAnual}. Salario Restante al Mes: $${resultadoFondoDeAhorroRestante}.
//         Proporcional: $${resultadoFondoDeAhorroProporcional} por ${totalDiasFondoDeAhorro} días trabajados.`);
//   }, [
//     salarioContext,
//     fondoDeAhorroPorcentaje,
//     primeraFechaContext,
//     segundaFechaContext,
//     booleanFA,
//   ]);

//   return mensaje;
// };
