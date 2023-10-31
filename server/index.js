const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'cruddatabase',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {

  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data from DB");
    } else {
      console.log("Successfully Retrieved Data from DB");
      res.status(200).send(result);
    }
  });
});

app.post('/api/insert', (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
  db.query(sqlInsert, [ movieName, movieReview ], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting data into DB");
    } else {
      console.log('Insertion Successful');
      res.status(200).send("Data inserted into DB");
    }
  });
});

app.delete('/api/delete/:movieName', (req, res) => {
  const name = req.params.movieName;
  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
  db.query(sqlDelete, name, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleteing data from DB");
    } else {
      console.log('Deletion Successful');
      res.status(200).send("Data deleted from DB");
    }
  });
});

app.put('/api/update', (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;
  const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
  db.query(sqlUpdate, [ review, name ], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating data to DB");
    } else {
      console.log('Updation Successful');
      res.status(200).send("Data updated to DB");
    }
  });
});

app.listen(3001, () => {
  console.log("Running on Port 3001");
});

