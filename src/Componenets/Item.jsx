export default function Items(props){


    return(
        <>
        <div className={props.className || "hover:scale-105 transition-transform"}>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="flex gap-5">
                <div className="text-sm font-semibold">${props.new_price}</div>
                <div className="text-sm font-semibold line-through" >${props.old_price}</div>
            </div>
        </div>
        
        </>
    )
}