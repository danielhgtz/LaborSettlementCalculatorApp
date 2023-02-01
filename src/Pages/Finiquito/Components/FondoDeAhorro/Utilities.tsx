import {
  usePrimeraFecha,
  useSCD,
  useSegundaFecha,
} from "../../../../helper/Context";
import { countBetweenDates } from "../../../../Utilities/Utilities";

export const NovToNov = () => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();

  const primeraFecha = new Date(primeraFechaContext);
  const segundaFecha = new Date(segundaFechaContext);

  const diciembre1 = new Date(segundaFecha.getFullYear() - 1, 11, 1);
  const diciembre2 = new Date(segundaFecha.getFullYear(), 11, 1);

  let totalDiasFondoDeAhorro;

  if (segundaFecha > diciembre2 && primeraFecha < diciembre2) {
    totalDiasFondoDeAhorro = countBetweenDates(segundaFecha, diciembre2);
  } else if (primeraFecha < diciembre1) {
    totalDiasFondoDeAhorro = countBetweenDates(segundaFecha, diciembre1);
  } else if (primeraFecha > diciembre2) {
    totalDiasFondoDeAhorro = countBetweenDates(segundaFecha, primeraFecha);
  } else {
    totalDiasFondoDeAhorro = countBetweenDates(segundaFecha, primeraFecha);
  }
  return totalDiasFondoDeAhorro;
};

export const FondoDeAhorroMensualFx = (fondoDeAhorroPorcentaje: number) => {
  const { salarioContext } = useSCD();
  return salarioContext * fondoDeAhorroPorcentaje * 2;
};
