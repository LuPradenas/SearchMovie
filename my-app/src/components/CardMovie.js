import React from "react";

const CardMovie = (props) => {
  return (
    <div className={`p-2 bd-highlight m-auto`}>
      <div className={`card`}>
        <div className={`row__posters`}>
          <div>
            {props.image == null ? (
              <img
                className=""
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt="Card image cap"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                className=""
                src={`http://image.tmdb.org/t/p/w185${props.image}`}
                alt="Card image cap"
                style={{ width: "100%", height: 360 }}
              />
            )}
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
  );
};

export default CardMovie;
