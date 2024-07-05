import { useContext } from "react";
import { Contex } from "../../hooks/CreateItems";

export default function Batata() {
  const nome = useContext(Contex);
  const filtro = nome.filter((val) => val.tipo == "batata");

  return (
    <>
      {filtro.map((val) => (
        <div key={val.nome}>
          <img className="w-100" src={val.image} alt="" />
          <span>{val.nome}</span>
        </div>
      ))}
    </>
  );
}
