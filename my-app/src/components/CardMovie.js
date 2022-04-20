import React from "react";

const CardMovie = (props) => {
return(
    <div className={`p-2 bd-highlight m-auto`}>
    <div className={`card`}>
    <div className={`row__posters`}>
    <div>
    <img 
    className={`card-img-top row__posterLarge`}
    src={`http://image.tmdb.org/t/p/w500/${props.image}`} 
    style={{ width: "100%",height: 360}}
    alt="" 
/>
    <div className={`card-body`}>
    <strong className={`card-title text-primary`}>
        <p>{props.title}</p>
        </strong>
    <p className={`card-text`}>{props.date}</p>
    </div>
    </div>
    </div>
    </div>
</div>
)
}

export default CardMovie;

