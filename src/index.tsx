import ReactDOM from "react-dom/client";
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
} from "./helper/Context";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StepperContextProvider>
    <PrimeraFechaContextProvider>
      <SegundaFechaContextProvider>
        <SCDContextProvider>
          <VacationContextProvider>
            <AguinaldoContextProvider>
              <PrimaDeAntiguedadContextProvider>
                <FondoDeAhorroContextProvider>
                  <ExtrasProvider>
                    <App />
                  </ExtrasProvider>
                </FondoDeAhorroContextProvider>
              </PrimaDeAntiguedadContextProvider>
            </AguinaldoContextProvider>
          </VacationContextProvider>
        </SCDContextProvider>
      </SegundaFechaContextProvider>
    </PrimeraFechaContextProvider>
  </StepperContextProvider>
);
