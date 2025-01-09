
import { Button, colors } from "@mui/material"
import exclusive from "./Assets/exclusive_image.png"



export default function Offers(){



    return(

        <>

        <div className="flex justify-around w-8/12 m-auto bg-gradient-to-b from-fuchsia-400 to-white mt-5 h-[60vh]">

            <div className="flex flex-col justify-center gap-1 ">
                <h1 className="text-5xl font-bold">Exclusive</h1>
                <h1 className="text-3xl font-bold">Offer for You</h1>
                <p className="text-sm font-medium mt-5">ONLY ON BEST SELLERS PRODUCTS</p>
                <Button color="secondary" variant="contained" >CHECK NOW</Button>
            </div>

            <div >
                <img className="h-[60vh]" src={exclusive} alt="" />
            </div>
         </div>
        </>
    )
}