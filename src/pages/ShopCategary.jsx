import { useContext } from "react";
import Footer from "../Componenets/Footer";
import context from "../ContextApi/ShopContext"

export default function ShopCategary(props){

    // const {content} = useContext(context)
    

    return(

        <>

        <div className="h-[70vh]">
            <img src={props.banner} className="h-full m-auto" alt="" />
        </div>
         
       


        </>
    )
}