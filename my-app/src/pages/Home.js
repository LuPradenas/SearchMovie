import { Component} from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";


class Home extends Component {
  constructor(){
    super();
    this.state = {
      movies:[],
      search:''
    }
    this.apiKey = process.env.API_KEY;
  }

handleSubmit= (e) => {
e.event.preventDefault();
 fetch( `https://api.themoviedb.org/3/search/movie?api_key=db2e787109918f694116286c8dde3d19&query=${this.state.search}`)
 .then(data=> data.json())
 .then(data =>{
  console.log(data)
  this.setState({movies:[...data]})
 })
}

handleChange = (e) =>{
this.setState({search: e.target.value})
}
render(){ 
  return (
    <>
      <div>
        <Navbar />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    </>
  );
}}

export default Home;
