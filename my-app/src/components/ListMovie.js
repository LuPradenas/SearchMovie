import React from "react";

import CardMovie from "./CardMovie";

const groupByElement = arr => {
  const hash = Object.create(null),
  result = [];
  arr?.forEach(el => {
     if (!hash[el.genre_ids]?.includes(el.genre_ids)) {
        hash[el.genre_ids] = [];
        result.push(hash[el.genre_ids]);
     };
     hash[el.genre_ids].push(el);
  });
  return result;
};


function ListMovie(props) {
  const moviesGrouped = groupByElement(Object.values(props.movies)[0])
  console.table(moviesGrouped);

  return (
    <div className="d-flex flex-row align-content-around flex-wrap text-center">
      {
        moviesGrouped?.map((data) =>{
          return data.map((data,key) =>{
            return (
              <CardMovie
                key={key}
                title={data.title}
                image={data.poster_path}
                date={data.release_date}
              />
            );
          })
      })}
    </div>
  );
}

export default ListMovie;
