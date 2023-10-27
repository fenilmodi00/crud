import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieReviewList, setMovieReviewList] = useState([])
  const [newMovieReview, setNewMovieReview] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieReviewList(response.data); 
    })
  }, []);

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName,
      movieReview: review
    }).then(() => {
      setMovieReviewList([
        ...movieReviewList,
        {
          movieName: movieName,
          movieReview: review,
        }
      ])
    })
  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  }

  const updateReview = (movie) => {
    Axios.put('http://localhost:3001/api/update', {
      movieName: movie,
      movieReview: newMovieReview,
    });
    setNewMovieReview('')
  };

  return (
    <div className="App">

      <h1> CRUD Application </h1>

      <div className="form">

        <label for="movieName">Movie Name:</label>
        <input 
          type="text"
          id="movieName"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <label for="review">Review:</label>
        <input
          type="text"
          id="review"
          name="review"
          onChange={(e) => {
            setReview(e.target.value)
          }}
          />

        <button onClick={submitReview}>
          Submit
        </button>

          {movieReviewList.map((val) => {
            return (

              <div className="card">
                <h1> {val.movieName} </h1>
                <p> {val.movieReview} </p>

                
              <input type="text" id="newReview" name="newReview" onChange={(e) => {
                setNewMovieReview(e.target.value);
              }}/>
              <button className="upd" onClick={() => {updateReview(val.movieName)}}>
                Update Review
              </button>

              <br/><br/>

              <button className="dlt" onClick={() => {deleteReview(val.movieName)}}>
                Delete
              </button>

              </div>

            )
          })}

      </div>

    </div>
  );
}

export default App;
