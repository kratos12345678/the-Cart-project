import WavingHandIcon from "@mui/icons-material/WavingHand";
import Hero_image from "../Componenets/Assets/hero_image.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
export default function Hero() {
  return (
    <>
      <div className="bg-indigo-50 flex flex-row">
        <div className="flex-1 flex flex-col justify-center items-center gap-5 leading-none">
          <h2 className="text-slate-950  font-semibold text-5xl w-8/12  ">
            NEW ARRIVALS ONLY
          </h2>
          <div className="flex items-center  gap-5 w-8/12">
            <p className=" font-bold text-5xl">New</p>
            <WavingHandIcon fontSize="large"/>
          </div>
          <h2 className=" font-bold block text-5xl w-8/12">Collections</h2>
          <h2 className=" font-bold text-5xl w-8/12 ">for everyone</h2>
          <div className="w-8/12">
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", width: "50%" }}
              color="error"
            >
              Latest Collections
            </Button>
          </div>
          <img src={ArrowRightAltIcon} alt="" />
        </div>
        <div>
          <img src={Hero_image} alt="" />
        </div>
      </div>
    </>
  );
}
