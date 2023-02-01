import { usePrimeraFecha } from "../../../../helper/Context";
import { useSegundaFecha } from "../../../../helper/Context";
import { UltimoAno } from "../../../../Utilities/Utilities";

export const DiasTrabajadosMesFunction = ({
  primerMes,
  segundoMes,
  difAños,
  primerDia,
  ultimoDia,
  diferenciaDiasUltimoPrimerDia,
  diasTrabajadosMensuales,
}: any) => {
  if (
    difAños === 0 &&
    primerMes === 0 &&
    segundoMes === 0 &&
    ultimoDia >= primerDia
  ) {
    return diferenciaDiasUltimoPrimerDia + 1;
  } else if (
    primerDia > ultimoDia ||
    difAños < 0 ||
    (difAños < 0 && primerMes > segundoMes) ||
    (difAños < 0 && primerDia > ultimoDia)
  ) {
    return 0;
  } else {
    return diasTrabajadosMensuales;
  }
};

export const DiasTrabajadosSemanalesFunction = ({
  primeraFecha,
  segundaFecha,
  diferenciaDiasUltimoPrimerDia,
  diasTrabajadosSemanales,
  primerMes,
  segundoMes,
  difAños,
}: any) => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const primeraFechaDiasTrabajadosSemanales = primeraFecha.getDay();
  let resultadoFinal;

  function getFirstDayOfWeek(segundaFecha: any) {
    const date = new Date(segundaFecha);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  if (
    diferenciaDiasUltimoPrimerDia === 0 &&
    primeraFechaDiasTrabajadosSemanales !== 0 &&
    difAños === 0
  ) {
    resultadoFinal = 1;
  } else if (
    (difAños < 0 && primerMes > segundoMes) ||
    difAños < 0 ||
    primeraFechaContext > segundaFechaContext
  ) {
    resultadoFinal = 0;
  } else if (primeraFecha > getFirstDayOfWeek(segundaFecha)) {
    if (diasTrabajadosSemanales === 0) {
      resultadoFinal = diasTrabajadosSemanales;
    } else {
      resultadoFinal =
        diasTrabajadosSemanales - primeraFechaDiasTrabajadosSemanales + 1;
    }
  } else if (primeraFecha > getFirstDayOfWeek(segundaFecha)) {
    resultadoFinal = diasTrabajadosSemanales;
  } else {
    resultadoFinal = diasTrabajadosSemanales;
  }
  return resultadoFinal;
};

export const DiasFunction = ({
  diasTrabajadosQuincena,
  diasTrabajadosSemanales,
  diasTrabajadosMensuales,
}: any) => {
  let messageDia: string;
  if (
    diasTrabajadosQuincena === 1 ||
    diasTrabajadosSemanales === 1 ||
    diasTrabajadosMensuales === 1
  ) {
    messageDia = "Día Trabajado";
  } else {
    messageDia = "Días Trabajados";
  }
  return messageDia;
};
