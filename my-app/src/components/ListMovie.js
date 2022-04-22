import React from "react";

import CardMovie from "./CardMovie";

const groupBy = (arr) => {
  const hash = Object.create(null),
    result = [];

  arr?.forEach((el) => {
    const notFound = !hash[el.genre_ids]?.forEach((movie) => {
      return movie.genre_ids?.find((id) => {
        return el.genre_ids?.includes(id);
      });
    });

    if (notFound) {
      hash[el.genre_ids] = [];
      result.push(hash[el.genre_ids]);
    }
    hash[el.genre_ids].push(el);
  });

  return result;
};

function ListMovie(props) {
  const moviesGrouped = groupBy(Object.values(props.movies)[0]);

  return (
    <div className="d-flex flex-row align-content-around flex-wrap text-center">
      {moviesGrouped?.map((data) => {
        return data.map((data, key) => {
          return (
            <CardMovie
              key={key}
              title={data.title}
              image={data.poster_path}
              date={data.release_date}
            />
          );
        });
      })}
    </div>
  );
}

export default ListMovie;
