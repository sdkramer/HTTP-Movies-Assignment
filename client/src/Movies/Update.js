import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: " ",
  director: " ",
  metascore: " ",
  // stars: [ ]
};

const Update = (props) => {

  const { push } = useHistory();
  
  const [movie, setMovie] = useState(initialMovie);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log("useEffect res: ", res.data);
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
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
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log("update put res: ", res.data);
        // props.setMovieList(...props.movieList, res.data);
        push(`/`);
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
          placeholder="Title"
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
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={movie.stars}
        />
        <div className="baseline" />

    

        <button className="update-button">Update</button>
      </form>
    </div>
  );
};

export default Update;