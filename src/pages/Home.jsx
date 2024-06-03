import { useContext } from "react"
import { Contex } from "../hooks/CreateItems"

export default function Home(){
    const nome = useContext(Contex)
    return(
        <>
        <h1>{nome}</h1>
        </>
    )
}