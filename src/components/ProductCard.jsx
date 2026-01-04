import "./productCard.css";

export  default function ProductCard(props){

    console.log(props.price);
    return (
        <div>
            <img src={props.imgsrc}  />
            <span>{props.name}</span>
            <span>{props.price}</span>
            <p>{props.description}</p>  
        </div>
    )
}