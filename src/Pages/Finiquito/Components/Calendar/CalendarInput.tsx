import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import { DatePicker } from "antd";

import "moment/locale/es";
moment.locale("es");

type Props = {
  titulo: string;
  fecha: string | Date;
  setFecha: Dispatch<SetStateAction<Date | string>>;
};

export const CalendarInput = ({ titulo, fecha, setFecha }: Props) => {
  const onChangeFecha = (e: any) => {
    const date = new Date(e.$d);
    date.setDate(date.getDate());

    setFecha(date);
  };

  const fechaFormateada = fecha && moment(fecha).format("LL") + ".";
  // /en .format("MMMM Do YYYY")

  return (
    <div>
      <h4>
        {titulo}: {fechaFormateada}
      </h4>
      <DatePicker onChange={onChangeFecha} />
    </div>
  );
};
