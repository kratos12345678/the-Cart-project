import Data from "./Assets/data";
import Items from "./Item";

export default function Popular() {
  return (
    <>
     <div className="flex justify-center mt-6 mb-3">
      <h1 className="font-semibold text-2xl">POPULAR IN WOMENS</h1>
      </div>
      <hr className="w-96 m-auto border-t-4 border-black mb-3"/>
      <div className="grid grid-cols-4 m-auto w-2/3 gap-20 ">
        {Data.map((data, i) => {
          return (
            <Items 
            // className={data.old_price == "150" && "col-span-1 md:col-span-2"}
              key={i}
              id={data.id}
              image={data.image}
              name={data.name}
              old_price={data.old_price}
              new_price={data.new_price}
            />
          );
        })}
      </div>
    </>
  );
}
