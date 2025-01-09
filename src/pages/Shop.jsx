import Footer from "../Componenets/Footer";
import Hero from "../Componenets/Hero";
import NewCollections from "../Componenets/NewCollections";
import News from "../Componenets/News";
import Offers from "../Componenets/Offers";
import Popular from "../Componenets/popular";

export default function Shop(){
    

    return(
        <div>
            <Hero/>

            <Popular/>

            <Offers/>

            <NewCollections/>

            <News/>

            <Footer/>
        </div>
    )
}