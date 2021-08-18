

function Card(props){
    return(
        <div className="card1">
            <div className="card-image">
                <img src={props.image} alt="" className="card-in-image"/>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title">
                {props.desc}
            </p>
            <p className='card-btn-parent'>
                <button className="card-btn">Read More</button>
            </p>
            
        </div>
    )
}
export default Card;