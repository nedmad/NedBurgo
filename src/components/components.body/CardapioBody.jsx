import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function CardapioBody() {
  const linkRef = useRef(null)
  useEffect(()=>{
    if(linkRef.current){
      linkRef.current.click();
    }
  },[])

  return (
    <>
      <section className="bodyAll-cardapio">
        <div className="cardapio-options">
          <Link ref={linkRef} to={"/bebidas"}>
            <span>Bebidas</span>
          </Link>
          <Link to={"/batata"}>
            <span>Batatas</span>
          </Link>
          <Link to={"/hamburgueres"}>
            <span>Hamburgueres</span>
          </Link>
          <Link to={"/sobremesas"}>
            <span>Sobremesas</span>
          </Link>
        </div>

        <div className="cardapio-food">
          <Outlet />
          {/*Traz todo o conteudo dos links  children do Body, do arquivo Router*/}
        </div>
      </section>
    </>
  );
}
