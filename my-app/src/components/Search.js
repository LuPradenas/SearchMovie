import React from "react";

function SearchBar(props) {
  return (
    <div className="container p-5">
      <h3 className="m-3">Write the name of a movie</h3>
      <div className="input-group m-3">
        <input
          aria-label="Search"
          aria-describedby="search-addon"
          label="search"
          type="text"
          className="form-control rounded "
          style={{ width: 200, height: 50 }}
          placeholder="Search movie..."
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
