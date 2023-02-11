import { useEffect, useState } from "react";
import {
  DiasTrabajadosDeQuincena,
  ParseFloatToTwoDecimals,
} from "../../../../../Utilities/Utilities";
import {
  PrimeraFechaContext,
  useSCD,
  useSegundaFecha,
} from "../../../../../helper/Context";
import {
  DiasFunction,
  DiasTrabajadosMesFunction,
  DiasTrabajadosSemanalesFunction,
} from "../Utilities";

type Props = {
  primerDia: any;
  primerAño: any;
  ultimoAño: any;
  ultimoDia: any;
  ultimoDiaPorMes: any;
  primeraFecha: any;
  segundaFecha: any;
};
export const SalarioProporcional = ({
  primerDia,
  primerAño,
  ultimoAño,
  ultimoDia,
  ultimoDiaPorMes,
  primeraFecha,
  segundaFecha,
}: Props) => {
  const {
    salarioContext,
    modalidadDePago,
    SCD,
    salarioPropContext,
    setSalarioPropContext,
  } = useSCD();
  const { segundaFechaContext } = useSegundaFecha();
  const [mensaje, setMensaje] = useState<string>();

  let segundaFechaDiasTrabajados: any;
  const diasTrabajadosMensuales = segundaFecha.getDate();
  const primerMes = primeraFecha.getMonth();
  const segundoMes = segundaFecha.getMonth();
  const diasTrabajadosSemanales = segundaFecha.getDay();
  const difAños = ultimoAño - primerAño;
  const difMeses = segundoMes - primerMes;
  const diferenciaDiasUltimoPrimerDia = ultimoDia - primerDia;

  const diasTrabajadosQuincena = DiasTrabajadosDeQuincena(
    ultimoDia,
    segundaFechaDiasTrabajados,
    primerDia,
    diferenciaDiasUltimoPrimerDia,
    difAños,
    difMeses
  );

  const totalDiasTrabajadosPorMes = DiasTrabajadosMesFunction({
    primerDia,
    ultimoDia,
    primerMes,
    segundoMes,
    difAños,
    diferenciaDiasUltimoPrimerDia,
    diasTrabajadosMensuales,
  });

  const totalDiasTrabajadosPorSemana = DiasTrabajadosSemanalesFunction({
    primeraFecha,
    segundaFecha,
    diferenciaDiasUltimoPrimerDia,
    diasTrabajadosSemanales,
    primerMes,
    segundoMes,
    difAños,
  });

  const diasMessage = DiasFunction({
    diasTrabajadosQuincena,
    diasTrabajadosSemanales,
    diasTrabajadosMensuales,
  });

  useEffect(() => {
    if (segundaFechaContext && salarioContext) {
      if (modalidadDePago === 15) {
        setSalarioPropContext(diasTrabajadosQuincena * SCD);
        setMensaje(
          `Por ${diasTrabajadosQuincena} ${diasMessage} de la Quincena.`
        );
      } else if (modalidadDePago === 7) {
        setSalarioPropContext(totalDiasTrabajadosPorSemana * SCD);
        setMensaje(
          `Por ${totalDiasTrabajadosPorSemana} ${diasMessage} de la Semana.`
        );
      } else if (modalidadDePago === ultimoDiaPorMes) {
        setSalarioPropContext(totalDiasTrabajadosPorMes * SCD);
        setMensaje(`Por ${totalDiasTrabajadosPorMes} ${diasMessage} del Mes.`);
      }
    }
  }, [
    primerDia,
    primeraFecha,
    PrimeraFechaContext,
    segundaFechaContext,
    salarioContext,
    modalidadDePago,
  ]);

  const salarioPropResultado =
    "$" + ParseFloatToTwoDecimals(salarioPropContext) + ".";

  return (
    <div>
      <p>Salario Proporcional: {salarioPropResultado}</p>
      <p>{mensaje}</p>
    </div>
  );
};
