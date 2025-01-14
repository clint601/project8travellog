
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";


const Tuesday =()=> {

    return (
        <p>Tuesday</p>
    )
}

const Card =(props)=> {

    const today = new Date().getDay()

    // console.log(today)
    
    return (
        <div classsName="col">
            <div className="card travel-card">
                <img src={props.imgUrl}alt={props.alt} className="img-fluid image image card-img-top rounded" />
                <h2 className="card-header display-3">{props.location}</h2>
                <div className="card-body">
                    <p className="card-text">{props.year}</p>
                    <p className="card-text description">{props.description}</p>
                </div>
            <div className="card-footer">
                    {props.isFavorite ? <BsEmojiSunglasses /> : <BsFillArrowThroughHeartFill />}
                </div>
            </div>
        </div>
    )
}


export default Card