import { useState } from "react";
import { useSegundaFecha } from "../../../../helper/Context";
import {
  countBetweenDates,
  DiasTrabajadosDeQuincena,
} from "../../../../Utilities/Utilities";
import { InputsPrestacionAdicional } from "./InputsPrestacionAdicional";
import { Button } from "antd";
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

  // console.log(formValues, resultados);

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

        // setTotalesAcumulados({
        //   ...totalesAcumulados,
        //   [resultados[index]]: acumuladoMes,
        // });

        return "$" + mes + " por Día. $" + acumuladoMes + " Acumulado.";
      } else if (resultados[index] === "quincena") {
        let quincena = formValues[index].amount / 15;

        quincena = parseFloat(quincena.toFixed(2));

        let acumuladoQuincena = quincena * diasDePago;
        acumuladoQuincena = parseFloat(acumuladoQuincena.toFixed(2));

        // setTotalesAcumulados({
        //   ...totalesAcumulados,
        //   [resultados[index]]: acumuladoQuincena,
        // });

        return (
          "$" + quincena + " por Día. $" + acumuladoQuincena + " Acumulado."
        );
      } else if (resultados[index] === "semestre") {
        let semestre = formValues[index].amount / mitadDeAño;
        semestre = parseFloat(semestre.toFixed(2));

        let acumuladoSemestre = semestre * diasAlSemestre;
        acumuladoSemestre = parseFloat(acumuladoSemestre.toFixed(2));

        // setTotalesAcumulados({
        //   ...totalesAcumulados,
        //   [resultados[index]]: acumuladoSemestre,
        // });

        return (
          "$" + semestre + " por Día. $" + acumuladoSemestre + " Acumulado."
        );
      } else if (resultados[index] === "año") {
        let ano = formValues[index].amount / diasAlAñoSegundaFecha;
        ano = parseFloat(ano.toFixed(2));

        let acumuladoAno = ano * diasTrabajadosUltimoAño;
        acumuladoAno = parseFloat(acumuladoAno.toFixed(2));

        // setTotalesAcumulados({
        //   ...totalesAcumulados,
        //   [resultados[index]]: acumuladoAno,
        // });
        return "$" + ano + " por Día. $" + acumuladoAno + " Acumulado.";
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    nuevaFormValues[index][e.target.name] = e.target.value;
    setFormValues(nuevaFormValues);
  };

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const inputData = [...resultados];
    inputData[index] = e.target.value;
    setResultados(inputData);
  };

  return (
    <div>
      Prestación Adicional:
      {formValues.map((e: any, index: number) => {
        return (
          <div key={index}>
            <InputsPrestacionAdicional
              index={index}
              handleChange={handleChange}
              handleChangeSelect={handleChangeSelect}
              showMinus={ShowMinus}
              remove={remove}
              palabra={palabra}
              cantidad={cantidad}
            />
          </div>
        );
      })}
      {ShowPlus ? <Button onClick={add}>+</Button> : null}
    </div>
  );
};
