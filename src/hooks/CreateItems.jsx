import { createContext } from "react";
import json from "../json/food.json";


export const Contex = createContext({})

export default function CreateItem({children}){

  const nome = [...json]
    return(
        <Contex.Provider value={nome}>{children}</Contex.Provider>
    )
}