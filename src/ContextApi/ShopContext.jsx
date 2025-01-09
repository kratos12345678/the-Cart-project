import { createContext } from "react";

import content from "../Componenets/Assets/all_product"


export const context = createContext(null);


export default function ShopProvider(props){


    const contextvalue = {content};

    return(

        <context.Provider value={contextvalue} >

            {props.children} 

        </context.Provider>
    )
}

