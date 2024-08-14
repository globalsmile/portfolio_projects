import React from "react";
import "./searchMovies.css"

export default function SearchMovies() {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          className="input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}
