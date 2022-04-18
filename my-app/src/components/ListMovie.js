import React from "react";

import CardMovie from "./CardMovie";

function ListMovie(props) {
  return (
    <div className="d-flex flex-row align-content-around flex-wrap text-center">
      {Object.values(props.movies)[0]?.map((data, key) => {
        return (
          <CardMovie
            key={key}
            title={data.title}
            image={data.poster_path}
            date={data.release_date}
          />
        );
      })}
    </div>
  );
}

export default ListMovie;
// {movies
//   .filter((movie) => {
//     return movie.title.toLowerCase().includes(search.toLowerCase());
//   })
