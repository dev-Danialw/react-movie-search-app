import React, { useState } from "react";

export default function SearchMoives() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const SearchMoives = async (e) => {
    e.preventDefault();
    console.log("mitting");
    const query = "Joker";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a662712626815555702f1c6320550397&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={SearchMoives}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Joker"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
