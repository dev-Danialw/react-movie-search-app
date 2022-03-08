import React from "react";

export default function searchMoives() {
  const searchMoives = async (e) => {
    e.preventDefault();
    console.log("mitting");
    const query = "Joker";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a662712626815555702f1c6320550397&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMoives}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Joker"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
