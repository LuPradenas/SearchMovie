import React from "react";

function SearchBar() {
return (
    <div className="container p-5"> 
    <div className="input-group m-2">
    <input
        label="search"
        type="text"
        className="form-control"
        placeholder="Search movie..."
    />
    <div className="input-group-append">
        <span className="input-group-text progress-bar" id="basic-addon2">
        Search
        </span>
    </div>
    </div>
    </div>
);
}

export default SearchBar;
