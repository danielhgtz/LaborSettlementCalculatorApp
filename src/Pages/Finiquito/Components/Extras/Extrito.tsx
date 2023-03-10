import { useState } from "react";
import { useSegundaFecha } from "../../../../helper/Context";
import {
  countBetweenDates,
  DiasTrabajadosDeQuincena,
} from "../../../../Utilities/Utilities";
import { InputsPrestacionAdicional } from "./InputsPrestacionAdicional";
import { Button } from "antd";
import "./Extritos.css";

type Props = {
  ultimoDia: number;
  ultimoDiaPorMes: number;
  diasAlAñoSegundaFecha: number;
  diasTrabajadosUltimoAño: number;
  diasAcumuladosUltimoAño: number | Date;
  primeraFecha: Date;
  segundaFecha: Date;
  ultimoAño: number;
};

export const Extrito = ({
  ultimoDia,
  ultimoDiaPorMes,
  diasAlAñoSegundaFecha,
  diasTrabajadosUltimoAño,
  diasAcumuladosUltimoAño,
  primeraFecha,
  segundaFecha,
  ultimoAño,
}: Props) => {
  const [formValues, setFormValues] = useState<any>([]);
  const [resultados, setResultados] = useState<any>([]);
  const [totalesAcumulados, setTotalesAcumulados] = useState<
    Record<string, number>
  >({});
  const { segundaFechaContext } = useSegundaFecha();
  //!const { globalIndex, setGlobalIndex } = useExtras();

  let nuevaFormValues: any = [...formValues];
  let ShowMinus: boolean = true;
  let ShowPlus: boolean = true;
  let diasTrabajados: any;

  const add = () => {
    setFormValues([...formValues, { name: "", amount: 0 }]);
    const nuevosResultados: any = [...resultados, []];
    setResultados(nuevosResultados);
  };

  const remove = (index: number) => {
    const deleteForm = [...formValues];
    deleteForm.splice(index, 1);
    setFormValues(deleteForm);
  };

  const diasDePago = DiasTrabajadosDeQuincena(
    ultimoDia,
    diasTrabajados,
    null,
    null,
    null,
    null
  );

  const mitadDeAño = diasAlAñoSegundaFecha / 2;
  const mitad: Date = new Date(ultimoAño, 6, 2);

  let diasAlSemestre: number;

  if (formValues.length === 0) {
    ShowMinus = false;
  } else if (formValues.length >= 3) {
    ShowPlus = false;
  }

  if (diasAcumuladosUltimoAño >= mitadDeAño) {
    if (diasTrabajadosUltimoAño <= mitadDeAño && primeraFecha > mitad) {
      diasAlSemestre = countBetweenDates(segundaFecha, primeraFecha);
    } else {
      diasAlSemestre = countBetweenDates(segundaFecha, mitad);
    }
  } else if (diasAcumuladosUltimoAño < mitad) {
    diasAlSemestre = diasTrabajadosUltimoAño;
  }

  const palabra = (index: number) => {
    return formValues[index].name;
  };

  const cantidad = (index: number) => {
    if (segundaFechaContext && formValues[index].amount && resultados[index]) {
      if (resultados[index] === "mes") {
        let mes = formValues[index].amount / ultimoDiaPorMes;
        mes = parseFloat(mes.toFixed(2));

        let acumuladoMes = mes * diasDePago;
        acumuladoMes = parseFloat(acumuladoMes.toFixed(2));

        return "$" + mes + " por Día. $" + acumuladoMes + " Acumulado.";
      } else if (resultados[index] === "quincena") {
        let quincena = formValues[index].amount / 15;

        quincena = parseFloat(quincena.toFixed(2));

        let acumuladoQuincena = quincena * diasDePago;
        acumuladoQuincena = parseFloat(acumuladoQuincena.toFixed(2));
        return (
          "$" + quincena + " por Día. $" + acumuladoQuincena + " Acumulado."
        );
      } else if (resultados[index] === "semestre") {
        let semestre = formValues[index].amount / mitadDeAño;
        semestre = parseFloat(semestre.toFixed(2));

        let acumuladoSemestre = semestre * diasAlSemestre;
        acumuladoSemestre = parseFloat(acumuladoSemestre.toFixed(2));

        return (
          "$" + semestre + " por Día. $" + acumuladoSemestre + " Acumulado."
        );
      } else if (resultados[index] === "año") {
        let ano = formValues[index].amount / diasAlAñoSegundaFecha;
        ano = parseFloat(ano.toFixed(2));

        let acumuladoAno = ano * diasTrabajadosUltimoAño;
        acumuladoAno = parseFloat(acumuladoAno.toFixed(2));

        return "$" + ano + " por Día. $" + acumuladoAno + " Acumulado.";
      }
    }
  };

  const handleChange = (e: any, index: number) => {
    nuevaFormValues[index][e.target.name] = e.target.value;
    setFormValues(nuevaFormValues);
  };

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const inputData = [...resultados];
    inputData[index] = e;
    setResultados(inputData);
  };

  const handleChangeInputNumber = (e: any, index: number) => {
    nuevaFormValues[index].amount = e;
    setFormValues(nuevaFormValues);
  };

  return (
    <div className="mainExtrasDiv">
      <div className="boxInputExtras">
        <h4 className="tituloPrestacionAdicional">Prestación Adicional:</h4>
        {ShowMinus ? (
          <div className="mapFxExtras">
            {formValues.map((e: any, index: number) => {
              return (
                <div className="mapLineExtras" key={index}>
                  <span className="mapIndexNumber">{index + 1 + ". "}</span>
                  <InputsPrestacionAdicional
                    index={index}
                    handleChange={handleChange}
                    handleChangeSelect={handleChangeSelect}
                    handleChangeInputNumber={handleChangeInputNumber}
                    showMinus={ShowMinus}
                    remove={remove}
                    palabra={palabra}
                    cantidad={cantidad}
                  />
                </div>
              );
            })}
          </div>
        ) : null}

        <div className="plusButtonDiv">
          {ShowPlus ? (
            <Button className="plusButton" onClick={add}>
              +
            </Button>
          ) : null}
        </div>
      </div>
      {ShowMinus ? (
        <div className="mainResultsExtrasDiv">
          <h4 className="tituloResultados"> Results:</h4>
          <div className="resultsExtrasInnerDiv">
            {formValues.map((e: any, index: any) => {
              return (
                <div className="extraMainResults" key={index}>
                  <p>
                    {index + 1 + ".-" + " " + palabra(index)} {cantidad(index)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
