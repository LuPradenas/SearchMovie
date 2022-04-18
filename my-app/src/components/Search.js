import React from "react";

function SearchBar(props) {
  return (
    <div className="container p-5">
      <div className="input-group m-2">
        <input
          label="search"
          type="text"
          className="form-control"
          placeholder="Search movie..."
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
