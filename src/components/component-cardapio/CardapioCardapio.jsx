import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function CardapioCardapio() {
  const linkRef = useRef(null);
  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  }, []);
  return (
    <>
      <div className="cardapio-options">
        <Link ref={linkRef} to={"/cardapio-listagem/bebidas"}>
          <span>Bebidas</span>
        </Link>
        <Link to={"/cardapio-listagem/batata"}>
          <span>Batatas</span>
        </Link>
        <Link to={"/cardapio-listagem/hamburgueres"}>
          <span>Hamburgers</span>
        </Link>
        <Link to={"/cardapio-listagem/sobremesas"}>
          <span>Sobremesas</span>
        </Link>
      </div>

      <div className="cardapio-food">
        <Outlet />{" "}
        {/*Traz todo o conteudo dos links  children do Body, do arquivo Router*/}
      </div>
    </>
  );
}
