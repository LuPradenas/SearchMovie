import { Component } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ListMovie from "../components/ListMovie";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
    this.apiKey = process.env.API_KEY;
  }

  handleChange = (e) => {
    if (e.target.value.length >= 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=db2e787109918f694116286c8dde3d19&query=${e.target.value}`
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({ movies: [data.results] });
        });
      e.preventDefault();
    }

  };


  render() {
    return (
      <>
        <div>
          <Navbar />
          <Search handleChange={this.handleChange} />
          <ListMovie movies={this.state.movies} />
        </div>
      </>
    );
  }
}

export default Home;
