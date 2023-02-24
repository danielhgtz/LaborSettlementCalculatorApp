import ParentFiniquito from "./Components/Parent/Parent";
import {
  PrimeraFechaContextProvider,
  SegundaFechaContextProvider,
  SCDContextProvider,
  VacationContextProvider,
  AguinaldoContextProvider,
  PrimaDeAntiguedadContextProvider,
  FondoDeAhorroContextProvider,
  ExtrasProvider,
  StepperContextProvider,
} from "../../helper/Context";

import "./LaborSettlementCalculator.css";
import { NavBar } from "../../Components/Navbar/Navbar";

function LaborSettlementCalculator() {
  return (
    <div>
      <NavBar />

      <StepperContextProvider>
        <PrimeraFechaContextProvider>
          <SegundaFechaContextProvider>
            <SCDContextProvider>
              <VacationContextProvider>
                <AguinaldoContextProvider>
                  <PrimaDeAntiguedadContextProvider>
                    <FondoDeAhorroContextProvider>
                      <ExtrasProvider>
                        <ParentFiniquito />
                      </ExtrasProvider>
                    </FondoDeAhorroContextProvider>
                  </PrimaDeAntiguedadContextProvider>
                </AguinaldoContextProvider>
              </VacationContextProvider>
            </SCDContextProvider>
          </SegundaFechaContextProvider>
        </PrimeraFechaContextProvider>
      </StepperContextProvider>
    </div>
  );
}

export default LaborSettlementCalculator;
