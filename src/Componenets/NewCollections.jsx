import { data } from "react-router-dom";
import new_collection from "./Assets/new_collections";
import Items from "./Item";

export default function NewCollections() {
  return (
    <>
      <div className="flex justify-center mt-6 mb-3 ">
        <h1 className="font-semibold text-2xl">NEW COLLECTIONS</h1>
      </div>
      <hr className="w-96 m-auto border-t-4 border-black mb-3" />
      <div className="grid grid-cols-4 m-auto w-2/3 gap-20 ">
        {new_collection.map((data, i) => {
          return (
            <Items
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
