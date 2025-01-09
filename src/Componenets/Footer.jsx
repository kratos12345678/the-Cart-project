
import Footerlogo from "./Assets/logo_big.png"
import insta from "./Assets/instagram_icon.png"
import pinterest from "./Assets/pintester_icon.png"
import whats from "./Assets/whatsapp_icon.png"



export default function Footer(){


    return(

        <>

        <div className=" flex flex-col w-2/3 m-auto justify-center items-center mt-24 mb-5">
            <div>
                <img src={Footerlogo} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className="flex gap-4 mt-10">
                <li>Company</li>
                <li>Products</li>
                <li>Officers</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="flex gap-6 mt-10">
                <div>
                    <img src={insta} alt="" />
                </div>

                <div>
                    <img src={pinterest} alt="" />
                </div>

                <div>
                    <img src={whats} alt="" />
                </div>
            </div>


        </div>


        
        </>
    )
}