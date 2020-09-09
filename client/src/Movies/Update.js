import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: " ",
  director: " ",
  metascore: " ",
  actors: " "
};

const Update = (props) => {
  
  const [movie, setMovie] = useState(initialMovie);
  const { id } = useParams();
  
  useEffect(() => {
    // axios
    //   .get(`http://localhost:3333/MovieById/${id}`)
    //   .then((res) => {
    //     // res.data
    //     setMovie(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, [id]);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;
    console.log("changeHandler value: ", value);

    setMovie({
      ...movie,
      [ev.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a PUT request to edit the Movie
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log(res);
        // props.setMovies(res.data);
        // push(`/Movie-list/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="movie-card">
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={movie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="actors"
          onChange={changeHandler}
          placeholder="Actors"
          value={movie.actors}
        />
        <div className="baseline" />

    

        <button className="update-button">Update</button>
      </form>
    </div>
  );
};

export default Update;