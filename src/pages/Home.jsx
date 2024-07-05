import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";


export default function Home(){
    return(
        <>
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}