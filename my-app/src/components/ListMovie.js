import React from "react";

import CardMovie from "./CardMovie";

function ListMovie(props) {
  return (
    <div className={`p-2 bd-highlight m-auto`}>
      {props.movies.map((movie, id) => {
        console.log(movie);
        console.log(id);

        return <CardMovie key={id} image={movie.poster_path} />;
      })}
    </div>
  );
}

export default ListMovie;
