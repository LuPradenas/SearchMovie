import { useState } from "react";
import ListMovie from "../components/ListMovie";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Home() {
  const [movies, setMovies] = useState([]);

  //const apiKey = process.env.API_KEY;

  fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=db2e787109918f694116286c8dde3d19`
  )
    .then((data) => data.json())
    .then((data) => {
      setMovies(data);
    });

  return (
    <>
      <div>
        <Navbar />
        <Search />
      </div>
      <ListMovie movies={movies} />
    </>
  );
}

export default Home;
