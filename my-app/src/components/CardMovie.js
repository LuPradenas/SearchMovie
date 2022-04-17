import React from "react";

const CardMovie = (props) => {
return(
    <div className={`card`}>
    <div className={`row__posters`}>
    <div>
        <img
        key={props.id}
        className={`card-img-top row__posterLarge`}
        src={`https://image.tmdb.org/t/p/w342${props.poster_path}`}
        alt=""
        />
        <div className={`card-body`}>
        <strong className={`card-title text-primary`}>
        {props.title}
        </strong>
        <p className={`card-text`}>ANIO</p>
        </div>
    </div>
    </div>
</div>
)
}

export default CardMovie;