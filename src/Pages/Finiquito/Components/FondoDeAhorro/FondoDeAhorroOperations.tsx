import {
  useFondoDeAhorro,
  usePrimeraFecha,
  useSCD,
  useSegundaFecha,
} from "../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../Utilities/Utilities";
import { useEffect } from "react";
import { NovToNov } from "./Utilities";

export const FondoDeAhorroMessage = ({ diasAlAñoSegundaFecha }: any) => {
  const { salarioContext } = useSCD();
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const {
    fondoDeAhorroProporcional,
    setFondoDeAhorroProporcional,
    fondoDeAhorroPorcentaje,
    booleanFA,
  } = useFondoDeAhorro();

  const totalDiasFondoDeAhorro: number = NovToNov();

  let fondoDeAhorroMensual: number | undefined;
  let fondoDeAhorroAnual: any;
  let fondoDeAhorroRestante: string;
  let resultadoFondoDeAhorroAnual: string;
  let mensaje: string | undefined;

  if (
    salarioContext &&
    fondoDeAhorroPorcentaje &&
    primeraFechaContext &&
    segundaFechaContext &&
    booleanFA
  ) {
    fondoDeAhorroMensual = salarioContext * fondoDeAhorroPorcentaje * 2;

    fondoDeAhorroAnual = fondoDeAhorroMensual * 12;

    resultadoFondoDeAhorroAnual = ParseFloatToTwoDecimals(fondoDeAhorroAnual);

    fondoDeAhorroRestante = ParseFloatToTwoDecimals(
      salarioContext - salarioContext * fondoDeAhorroPorcentaje
    );

    const resultadoFondoDeAhorroProporcional = ParseFloatToTwoDecimals(
      fondoDeAhorroProporcional
    );
    mensaje = ` Total Fondo de Ahorro al Año: $${resultadoFondoDeAhorroAnual}. Salario Restante al Mes: $${fondoDeAhorroRestante}.
      Proporcional: $${resultadoFondoDeAhorroProporcional} por ${totalDiasFondoDeAhorro} días trabajados.`;
  }

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

  return (
    <div>
      <p>{mensaje}</p>
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
