import moment from "moment";
import { createContext, useContext, useState } from "react";

/////////////////////////////////////////////////////////

export const PrimeraFechaContext = createContext({
  primeraFechaContext: "",
  handlePrimeraFechaChange: (e: any) => {},
  primeraFechaContextLetra: "",
});
// hook
export const usePrimeraFecha = () => useContext(PrimeraFechaContext);

// provider
export const PrimeraFechaContextProvider = ({ children }: any) => {
  const [primeraFechaContext, setPrimeraFechaContext] = useState("");
  const [primeraFechaContextLetra, setPrimeraFechaContextLetra] = useState("");

  const handlePrimeraFechaChange = (e: any) => {
    setPrimeraFechaContext(e);
    setPrimeraFechaContextLetra(moment(e).format("LL") + ".");
  };

  return (
    <PrimeraFechaContext.Provider
      value={{
        primeraFechaContext,
        handlePrimeraFechaChange,
        primeraFechaContextLetra,
      }}
    >
      {children}
    </PrimeraFechaContext.Provider>
  );
};

/////////////////////////////////////////////////////////

export const SegundaFechaContext = createContext({
  segundaFechaContext: "",
  handleSegundaFechaChange: (e: any) => {},
  segundaFechaContextLetra: "",
});
// hook
export const useSegundaFecha = () => useContext(SegundaFechaContext);

// provider
export const SegundaFechaContextProvider = ({ children }: any) => {
  const [segundaFechaContext, setSegundaFechaContext] = useState("");
  const [segundaFechaContextLetra, setSegundaFechaContextLetra] = useState("");

  const handleSegundaFechaChange = (e: any) => {
    setSegundaFechaContext(e);
    setSegundaFechaContextLetra(moment(e).format("LL") + ".");
  };

  return (
    <SegundaFechaContext.Provider
      value={{
        segundaFechaContext,
        handleSegundaFechaChange,
        segundaFechaContextLetra,
      }}
    >
      {children}
    </SegundaFechaContext.Provider>
  );
};

/////////////////////////////////////////////////////////

// context
export const SCDContext = createContext({
  salarioContext: 0,
  setSalarioContext: (e: number) => {},
  SCD: 0,
  handleSCDChange: (ultimoDiaPorMes: any) => {},
  setSeleccion: (e: string) => {},
  seleccion: "",
  modalidadDePago: 0,
  setModalidadDePago: (e: number) => {},
  salarioPropContext: 0,
  setSalarioPropContext: (e: number) => {},
});

// hook
export const useSCD = () => useContext(SCDContext);

// provider
export const SCDContextProvider = ({ children }: any) => {
  const [salarioContext, setSalarioContext] = useState(0);
  const [SCD, setSCD] = useState(0);
  const [seleccion, setSeleccion] = useState("quincena");
  const [modalidadDePago, setModalidadDePago] = useState(15);
  const [salarioPropContext, setSalarioPropContext] = useState<number>(0);

  const handleSCDChange = (ultimoDiaPorMes: any) => {
    if (ultimoDiaPorMes) {
      setSCD(salarioContext / ultimoDiaPorMes);
    } else {
      setSCD(salarioContext / 30);
    }
  };

  // const handleModalidadDePago = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelección(e.target.value);
  //   if (e.target.value === "mes") {
  //     setModalidadDePago(30);
  //   } else if (e.target.value === "semana") {
  //     setModalidadDePago(7);
  //   } else if (e.target.value === "quincena") {
  //     setModalidadDePago(15);
  //   }
  // };

  return (
    <SCDContext.Provider
      value={{
        salarioContext,
        setSalarioContext,
        SCD,
        handleSCDChange,
        setSeleccion,
        seleccion,
        modalidadDePago,
        setModalidadDePago,
        salarioPropContext,
        setSalarioPropContext,
      }}
    >
      {children}
    </SCDContext.Provider>
  );
};

//////////////////////////////////////////////////////////

//Context
export const AguinaldoContext = createContext({
  aguinaldoContext: 0,
  onChangeAguinaldo: (e: any) => {},
  diasAguinaldoProporcional: 0,
  setDiasAguinaldoProporcional: (e: number) => {},
  aguinaldoProporcional: 0,
  setAguinaldoProporcional: (e: number) => {},
});
// hook
export const useAguinaldo = () => useContext(AguinaldoContext);

// provider
export const AguinaldoContextProvider = ({ children }: any) => {
  const [aguinaldoContext, setAguinaldoContext] = useState(0);
  const [diasAguinaldoProporcional, setDiasAguinaldoProporcional] = useState(0);
  const [aguinaldoProporcional, setAguinaldoProporcional] = useState(0);

  const onChangeAguinaldo = (e: any) => {
    setAguinaldoContext(e);
  };

  return (
    <AguinaldoContext.Provider
      value={{
        aguinaldoContext,
        onChangeAguinaldo,
        diasAguinaldoProporcional,
        setDiasAguinaldoProporcional,
        aguinaldoProporcional,
        setAguinaldoProporcional,
      }}
    >
      {children}
    </AguinaldoContext.Provider>
  );
};

/////////////////////////////////////////////////////

//Context
export const VacationContext = createContext({
  vacationDays: 0,
  proportionalVacationResult: 0,
  handleVacationChange: (e: any) => {},
  setProportionalVacationResult: (e: any) => {},
  primaVacacional: 0,
  setPrimaVacacional: (e: number) => {},
});

// hook
export const useVacation = () => useContext(VacationContext);

// provider
export const VacationContextProvider = ({ children }: any) => {
  const [vacationDays, setVacationDays] = useState<number>(0);
  const [proportionalVacationResult, setProportionalVacationResult] =
    useState(0);
  const [primaVacacional, setPrimaVacacional] = useState(0);

  const handleVacationChange = (e: number) => setVacationDays(e);

  return (
    <VacationContext.Provider
      value={{
        vacationDays,
        proportionalVacationResult,
        handleVacationChange,
        setProportionalVacationResult,
        primaVacacional,
        setPrimaVacacional,
      }}
    >
      {children}
    </VacationContext.Provider>
  );
};
//////////////////////////////////////////////////////

//Context
export const PrimaDeAntiguedadContext = createContext({
  totalDineroPrima: 0,
  setTotalDineroPrima: (e: number) => {},
});
// hook
export const usePrimaDeAntiguedad = () => useContext(PrimaDeAntiguedadContext);

// provider
export const PrimaDeAntiguedadContextProvider = ({ children }: any) => {
  const [totalDineroPrima, setTotalDineroPrima] = useState(0);

  return (
    <PrimaDeAntiguedadContext.Provider
      value={{
        totalDineroPrima,
        setTotalDineroPrima,
      }}
    >
      {children}
    </PrimaDeAntiguedadContext.Provider>
  );
};
/////////////////////////////////////////////////////////////////////

export const FondoDeAhorroContext = createContext({
  booleanFA: false,
  setBooleanFA: (e: boolean) => {},
  value: 0,
  setValue: (e: number) => {},
  fondoDeAhorroProporcional: 0,
  setFondoDeAhorroProporcional: (e: number) => {},
  fondoDeAhorroPorcentaje: 0,
  setFondoDeAhorroPorcentaje: (e: number) => {},
});

export const useFondoDeAhorro = () => useContext(FondoDeAhorroContext);

export const FondoDeAhorroContextProvider = ({ children }: any) => {
  const [booleanFA, setBooleanFA] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [fondoDeAhorroProporcional, setFondoDeAhorroProporcional] = useState(0);
  const [fondoDeAhorroPorcentaje, setFondoDeAhorroPorcentaje] = useState<any>();

  return (
    <FondoDeAhorroContext.Provider
      value={{
        booleanFA,
        setBooleanFA,
        value,
        setValue,
        fondoDeAhorroProporcional,
        setFondoDeAhorroProporcional,
        fondoDeAhorroPorcentaje,
        setFondoDeAhorroPorcentaje,
      }}
    >
      {children}
    </FondoDeAhorroContext.Provider>
  );
};

///////////////////////////////////////////////
export const StepperContext = createContext({
  number: 0,
  setNumber: (e: number) => {},
  maxNumber: 0,
  setMaxNumber: (e: number) => {},
});
// hook
export const useStepper = () => useContext(StepperContext);

// provider
export const StepperContextProvider = ({ children }: any) => {
  const [number, setNumber] = useState<number>(0);
  const [maxNumber, setMaxNumber] = useState<number>(0);

  return (
    <StepperContext.Provider
      value={{ number, setNumber, maxNumber, setMaxNumber }}
    >
      {children}
    </StepperContext.Provider>
  );
};
