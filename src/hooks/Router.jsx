import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Batata from "../components/Food-components/Batata";
import Bebidas from "../components/Food-components/Bebidas";
import Hamburguer from "../components/Food-components/Hamburguer";
import Sobremesa from "../components/Food-components/Sobremesa";
import Body from "../components/Body";
import Cardapio from "../pages/Cardapio";
import PageFood from "../pages/PageFood";


export const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                index:1,
                element:<Body/>,
                children:[
                    {
                        path:"/bebidas",
                        element: <Bebidas/>,
                        
                    },
                    {
                        path:"/batata",
                        element: <Batata/>,
                        
                    },
                    {
                        path:"/hamburgueres",
                        element: <Hamburguer/>,
                        
                    },
                    {
                        path:"/sobremesas",
                        element: <Sobremesa/>,
                        
                    }
                ]
            },
            {
                path:"/cardapio-listagem",
                element:<Cardapio/>,
                children:[
                    {
                        path:"/cardapio-listagem/bebidas",
                        element: <Bebidas/>,
                        
                    },
                    {
                        path:"/cardapio-listagem/batata",
                        element: <Batata/>,
                        
                    },
                    {
                        path:"/cardapio-listagem/hamburgueres",
                        element: <Hamburguer/>,
                        
                    },
                    {
                        path:"/cardapio-listagem/sobremesas",
                        element: <Sobremesa/>,
                        
                    }
                ]
               
            },

            {
                path:"/cardapio/:nome",
                element:<PageFood/>
            }
            
        ]
    }
    
])

