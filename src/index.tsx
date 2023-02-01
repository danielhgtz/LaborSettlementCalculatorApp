import ReactDOM from "react-dom/client";
import {
  PrimeraFechaContextProvider,
  SegundaFechaContextProvider,
  SCDContextProvider,
  VacationContextProvider,
  AguinaldoContextProvider,
  PrimaDeAntiguedadContextProvider,
  FondoDeAhorroContextProvider,
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
                  <App />
                </FondoDeAhorroContextProvider>
              </PrimaDeAntiguedadContextProvider>
            </AguinaldoContextProvider>
          </VacationContextProvider>
        </SCDContextProvider>
      </SegundaFechaContextProvider>
    </PrimeraFechaContextProvider>
  </StepperContextProvider>
);
