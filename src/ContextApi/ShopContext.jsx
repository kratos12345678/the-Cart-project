import { createContext } from "react";

import content from "../Componenets/Assets/all_product"


export const context = createContext(null);


export default function ShopProvider(props){


    const contentvalue = {content};

    return(

        <context.Provider value={contentvalue} >

            {props.children} 

        </context.Provider>
    )
}

