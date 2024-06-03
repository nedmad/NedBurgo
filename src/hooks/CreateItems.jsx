import { createContext } from "react";



export const Contex = createContext({})

export default function CreateItem({children}){
    const nome = "ned"
    return(
        <Contex.Provider value={nome}>{children}</Contex.Provider>
    )
}