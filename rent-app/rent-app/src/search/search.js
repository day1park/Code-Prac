import React from "react";

const Search = () => {
  return (
    <div className="Search">
      <form>
        <label>input Lease ID no.</label>
        <input
          type="text"
          placeholder=":id"
          className="form-control"
          id="id-input"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Search;
