import { Component } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ListMovie from "../components/ListMovie";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      usedSearch: false,
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleChange = (e) => {
    if (e.target.value.length >= 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${e.target.value}`
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({ movies: [data.results], usedSearch: true });
        });
      e.preventDefault();
    }
  };

  _renderResults() {
    return this.state.movies[0]?.length === 0 ? (
      <h1>Sorry! Results not found!</h1>
    ) : (
      <ListMovie movies={this.state.movies} />
    );
  }

  render() {
    return (
      <>
        <div>
          <Navbar />
          <Search handleChange={this.handleChange} />
          {this.state.usedSearch ? (
            this._renderResults()
          ) : (
            <div className="text-center">
              <small>Write the name of a movie</small>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Home;
