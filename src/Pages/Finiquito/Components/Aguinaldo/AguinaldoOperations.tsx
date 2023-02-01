import React, { useEffect } from "react";
import {
  useAguinaldo,
  useSCD,
  usePrimeraFecha,
  useSegundaFecha,
} from "../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../Utilities/Utilities";

export const AguinaldoOperations = ({
  diasTrabajadosUltimoAño,
  diasAlAñoSegundaFecha,
}: any) => {
  const {
    aguinaldoContext,
    diasAguinaldoProporcional,
    setDiasAguinaldoProporcional,
    aguinaldoProporcional,
    setAguinaldoProporcional,
  } = useAguinaldo();
  const { SCD } = useSCD();
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();

  useEffect(() => {
    if (primeraFechaContext && segundaFechaContext && SCD && aguinaldoContext) {
      setDiasAguinaldoProporcional(
        (aguinaldoContext / diasAlAñoSegundaFecha) * diasTrabajadosUltimoAño
      );
      setAguinaldoProporcional(
        (aguinaldoContext / diasAlAñoSegundaFecha) *
          diasTrabajadosUltimoAño *
          SCD
      );
    }
  }, [primeraFechaContext, segundaFechaContext, SCD, aguinaldoContext]);

  const resultadoDiasAguinaldoProporcional = ParseFloatToTwoDecimals(
    diasAguinaldoProporcional
  );
  const resultadoAguinaldoProporcional = ParseFloatToTwoDecimals(
    aguinaldoProporcional
  );

  return (
    <div>
      <p>Dìas totales de aguinaldo: {aguinaldoContext}</p>
      <p>
        Días de Aguinaldo Proporcional: {resultadoDiasAguinaldoProporcional}
      </p>
      <p>Aguinaldo Proporcional: {resultadoAguinaldoProporcional}</p>
    </div>
  );
};

//aguinaldo se paga hasta noviembre arreglar.
