import moment from "moment";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DatePicker } from "antd";
import "moment/locale/es";
import { usePrimeraFecha, useSegundaFecha } from "../../../../helper/Context";
import dayjs, { Dayjs } from "dayjs";

moment.locale("es");

type Props = {
  titulo: string;
  setFecha: Dispatch<SetStateAction<Date | string>>;
  msgContext: string;
  fechaContext: any;
};

export const CalendarInput = ({
  titulo,
  setFecha,
  msgContext,
  fechaContext,
}: Props) => {
  const { primeraFechaContext } = usePrimeraFecha();
  const { segundaFechaContext } = useSegundaFecha();
  const [dateValue, setDateValue] = useState<Dayjs>();

  const onChangeFecha = (e: any) => {
    const date = new Date(e.$d);
    date.setDate(date.getDate());
    setFecha(date);
  };

  //const fechaFormateada = fecha && moment(fecha).format("LL") + ".";

  // /en .format("MMMM Do YYYY")

  useEffect(() => {
    if (primeraFechaContext && segundaFechaContext) {
      setDateValue(dayjs(fechaContext));
    }
  }, [primeraFechaContext, segundaFechaContext]);

  return (
    <div>
      <h4>
        {titulo}: {msgContext}
      </h4>
      <DatePicker onChange={onChangeFecha} value={dateValue} />
    </div>
  );
};
