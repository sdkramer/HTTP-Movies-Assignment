import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import Update from "./Movies/Update";
import Add from "./Movies/Add";
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  // return (
  //   <>
  //     <SavedList list={savedList} />
  //     <Route exact path="/" render={props => <MovieList {...props} movies={movies} />} />
  //     <Route
  //       path="/movies/:id"
  //       render={props => {
  //         return <Movie {...props} addToSavedList={addToSavedList} getData={getData} />;
  //       }}
  //     />
  //     <Route path="/update-movie/:id" render={props => {
  //       return <UpdateMovie {...props} movies={movies} setMovies={setMovies} getData={getData} />;
  //     }} />
  //   </>
  // );

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/movies">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>

      <Route path="/update-movie/:id">
        <Update  movieList={movieList} setMovieList={setMovieList}/>
      </Route>

      <Route path="/add-movie">
        <Add />
      </Route>
    </>
  );
};

export default App;
