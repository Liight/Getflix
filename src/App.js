import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { apiKey } from "./secret/secret";

class App extends Component {
  state = {
    hasReceivedMovieData: false,
    movieIdData: [],
    movieList: [],
    updatedMovieList: [],
    hasReceivedMovieImageData: false,
    tempMovieImageData: "initial Value"
  };

  componentWillMount() {
    this.getMovieIdsList().then(() => {
      this.getMovieData(this.state.movieIdData);
    });
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextState.hasReceivedMovieData !== this.state.hasReceivedMovieData ||
      nextState.hasReceivedMovieImageData !==
        this.state.hasReceivedMovieImageData
    );
  };

  componentDidUpdate() {
    console.log("component updated : ", this.state);
  }

  getMovieData = movieIdsArray => {
    // Internal promise
    // Get Movie Data
    let MovieObjectsArray = [];
    let promises = [];

    for (let i = 0; i < movieIdsArray.length - 1; i++) {
      promises.push(
        axios
          .get("https://api.themoviedb.org/3/movie/" + movieIdsArray[i] + "?", {
            params: {
              api_key: apiKey,
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
          return {
            ...prevState,
            movieList: MovieObjectsArray,
            hasReceivedMovieData: true
          };
        },
        () => {
          console.log("state after getMovieData: ", this.state);
          // Update Image Data on created movie object in State
          this.callGetMovieImageData(MovieObjectsArray);
        }
      )
    );
  };

  getMovieIdsList = async () => {
    // Async / Await
    // Get some movie Ids (changes)
    let movieIds = [];
    await axios
      .get("https://api.themoviedb.org/3/movie/top_rated?", {
        params: {
          api_key: apiKey,
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
        movieIdData: movieIds
      };
    });
  };

  getMovieDataList = () => {
    let movieList = [...this.state.movieList];
    // console.log('getMovieDataList : movieList', movieList);
    return movieList;
  };

  callGetMovieImageData = MovieObjectsArray => {
    let prefix = "https://image.tmdb.org/t/p/original";
    let moviesWithImages = [...MovieObjectsArray];
    let promises = [];

    for (let i = 0; i < moviesWithImages.length - 1; i++) {
      promises.push(
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              moviesWithImages[i].id +
              "/images?",
            {
              params: {
                api_key: apiKey,
                page: 1
              }
            }
          )
          .then(response => {
            moviesWithImages[i].posterUrl =
              prefix + response.data.posters[0].file_path;
          })
          .catch(error => {
            console.log(error);
          })
      );
    }

    Promise.all(promises).then(() =>
      this.setState(
        prevState => {
          return {
            ...prevState,
            hasReceivedMovieImageData: true,
            updatedMovieList: moviesWithImages
          };
        },
        () => {
          setTimeout(() => {
            console.log("state after updateMovieImageData: ", this.state);
          }, 1000);
        }
      )
    );
  };

  render() {
    console.log("getMovieDataList: initial render", this.getMovieDataList());
    const moviesArray = this.getMovieDataList();

    let movieRow = moviesArray.map(movie => {
      return (
        <div id="movie-row-item" key={Math.random() * 10}>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <img
            src={movie.posterUrl}
            width={"auto"}
            height={"100px"}
            alt=""
          ></img>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>running...</h1>
        {movieRow}
      </div>
    );
  }
}

export default App;
