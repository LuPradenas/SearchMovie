import React from "react";

function SearchBar(props) {
return (
    <div className="container p-5"> 
    <div className="input-group m-2">
 <form  onSubmit={props.handleSubmit}>
    <input
        label="search"
        type="text"
        className="form-control"
        placeholder="Search movie..."
        onChange={props.handleChange}
    />
    <div className="input-group-append">
        <span className="input-group-text progress-bar" id="basic-addon2">
        Search
        </span>
    </div>
    </form> 
    </div>
    </div>
);
}

export default SearchBar;
