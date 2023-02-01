//?Modularización del div del componente de extras
import { Button } from "antd";
export const InputsPrestacionAdicional = ({
  handleChange,
  handleChangeSelect,
  index,
  showMinus,
  remove,
  palabra,
  cantidad,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleChangeSelect: (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  index: number;
  showMinus: boolean;
  remove: (index: number) => void;
  palabra: (index: number) => string;
  cantidad: (index: number) => string | undefined;
}) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Nombre de la Prestación"
        onChange={(e) => handleChange(e, index)}
      />
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => handleChangeSelect(e, index)}
      >
        <option value="DEFAULT" disabled>
          Escoge forma de prestación
        </option>
        <option value="mes">Al Mes</option>
        <option value="quincena">A los 15 Días</option>
        <option value="semestre">Al Semestre</option>
        <option value="año">Al Año</option>
      </select>
      <input
        className="containerDiv "
        min="0"
        type="number"
        placeholder="$$"
        prefix="$"
        name="amount"
        onChange={(e) => handleChange(e, index)}
      />
      {showMinus ? (
        <Button
          onClick={() => {
            remove(index);
          }}
        >
          -
        </Button>
      ) : null}
      {palabra(index)} {cantidad(index)}
    </div>
  );
};
