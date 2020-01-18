import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    hasReceivedMovieData: false,
    movieIdData: [],
    movieList: []
  };

  componentWillMount() {
    this.getMovieIdsList().then(() => {
      this.getMovieData(this.state.movieIdData);
    });
  }

  getMovieData = movieIdsArray => { // Internal promise
    // Get Movie Data
    let MovieObjectsArray = [];
    let promises = [];

    for (let i = 0; i < movieIdsArray.length - 1; i++) {
      promises.push(
        axios
          .get("https://api.themoviedb.org/3/movie/" + movieIdsArray[i] + "?", {
            params: {
              api_key: "c50edcff58bb0a25f1aa137a9751550d",
              language: "en-US"
            }
          })
          .then(response => {
            // console.log("response: ", response.data);
            MovieObjectsArray.push(response.data);
          })
          .catch(error => {
            console.log(error);
          })
      );
    }

    Promise.all(promises).then(() =>
      this.setState(
        prevState => {
          return { ...prevState, movieList: MovieObjectsArray };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  };

  getMovieIdsList = async () => { // Async / Await
    // Get some movie Ids (changes)
    let movieIds = [];
    await axios
      .get("https://api.themoviedb.org/3/movie/top_rated?", {
        params: {
          api_key: "c50edcff58bb0a25f1aa137a9751550d",
          language: "en-US",
          page: 1
        }
      })
      .then(response => {
        const smallArray = response.data.results.slice(0, 10); // shorten array
        for (let obj in smallArray) {
          movieIds.push(smallArray[obj].id.toString()); // push the id as a string to movieIds array
        }
      })
      .catch(error => {
        console.log(error);
      });
    // Update State with the movie ids as a string array
    this.setState(prevState => {
      return {
        ...prevState,
        hasReceivedMovieData: true,
        movieIdData: movieIds
      };
    });
  };

  render() {

    return (
      <div className="App">
        <h1>running...</h1>
      </div>
    );
  }
}

export default App;
