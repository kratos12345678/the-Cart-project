import { Button } from "@mui/material";

export default function News() {
  return (
    <>
      <div className="flex flex-col gap-0 justify-around items-center w-2/3 m-auto bg-gradient-to-b from-fuchsia-400 to-white mt-5 h-[40vh]">
        <h1 className="font-serif font-semibold text-3xl">Get Exclusive Offer on Your Email</h1>
        <p className="font-semibold"> Subscribe to our newletter and stay updated</p>
        <div className="flex gap-5 w-1/2 justify-center items-center">
          <input type="email" title="Enter Email" placeholder="Enter Email" className="rounded-xl w-1/2 h-full border-2 border-black "/> 
          <Button variant="contained" sx={{borderRadius : "0.75rem", height: "100%"}} color="info">Subscribe</Button>
        </div>
      </div>
    </>
  );
}
