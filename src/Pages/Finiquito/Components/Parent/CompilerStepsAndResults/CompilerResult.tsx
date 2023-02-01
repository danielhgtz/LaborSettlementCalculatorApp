import { AguinaldoOperations } from "../../Aguinaldo/AguinaldoOperations";
import { CalendarTotalTime } from "../../Calendar/CalendarTotalTime";
import { FondoDeAhorroMessage } from "../../FondoDeAhorro/FondoDeAhorroOperations";
import { PrimaDeAntiguedadOperations } from "../../PrimaDeAntiguedad/PrimaDeAntiguedadOperaciones";
import { SalarioProporcional } from "../../Salario/Results/SalarioProporcional";
import { SCDResult } from "../../Salario/Results/SCDResult";
import { Total } from "../../Total/Total";
import { VacationOperations } from "../../Vacaciones/VacationOperations";

export const CompilerResults = ({
  años,
  meses,
  dias,
  primerDia,
  primerAño,
  ultimoAño,
  ultimoDia,
  ultimoDiaPorMes,
  primeraFecha,
  segundaFecha,
  diasAlAñoSegundaFecha,
  diasTrabajadosUltimoAño,
}: any) => {
  return (
    <div>
      <SCDResult />
      <CalendarTotalTime años={años} meses={meses} dias={dias} />
      <SalarioProporcional
        primerDia={primerDia}
        primerAño={primerAño}
        ultimoAño={ultimoAño}
        ultimoDia={ultimoDia}
        ultimoDiaPorMes={ultimoDiaPorMes}
        primeraFecha={primeraFecha}
        segundaFecha={segundaFecha}
      />
      <VacationOperations
        segundaFecha={segundaFecha}
        diasAlAñoSegundaFecha={diasAlAñoSegundaFecha}
        diasTrabajadosUltimoAño={diasTrabajadosUltimoAño}
      />
      <AguinaldoOperations
        diasTrabajadosUltimoAño={diasTrabajadosUltimoAño}
        diasAlAñoSegundaFecha={diasAlAñoSegundaFecha}
      />
      <PrimaDeAntiguedadOperations años={años} meses={meses} dias={dias} />
      <FondoDeAhorroMessage diasAlAñoSegundaFecha={diasAlAñoSegundaFecha} />
      <Total />
    </div>
  );
};
