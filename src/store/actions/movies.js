// Note: Some of these actions check local storage before dispatching
import * as actionTypes from "./actionTypes";
import * as localStorageHandler from "../../utility/localStorage";
import axios from "axios";
import { apiKey } from "../../secret/secret";

export const updateActiveBigInfoKey = (key) => {
  console.log('ACTION: global key to be updated next ', key);
  return {
    type: actionTypes.UPDATE_ACTIVE_BIG_INFO_KEY,
    activeBigInfoKey: key
  };
}

export const getTopRatedMovies = () => {
  return dispatch => {
    // Check if we've already called the api and stored the result in localStorage
    if (
      localStorageHandler.getLocalStorageKeyCheck("updatedMovieListTopRated")
    ) {
      // console.log("local storage key confirmed in actions");
      let localStorageTopRatedMovies = localStorageHandler.getLocalStorage(
        "updatedMovieListTopRated"
      );
      // console.log("localStorageTopRatedMovies", localStorageTopRatedMovies);
      dispatch(updateAndAddMoviesListTopRated(localStorageTopRatedMovies));
    }

    asyncWrapper(
      getTopRatedMovieIdsList,
      getMovieData,
      callGetMovieImageData
    ).then(response => {
      // console.log("response 4 : after promise : Some Other : ", response);
      dispatch(updateAndAddMoviesListTopRated(response));
    });
  };
};

export const getSomeOtherMovies = () => {
  return dispatch => {
    // Check if we've already called the api and stored the result in localStorage
    if (
      localStorageHandler.getLocalStorageKeyCheck("updatedMovieListSomeOther")
    ) {
      // console.log("local storage key confirmed in actions");
      let localStorageSomeOtherMovies = localStorageHandler.getLocalStorage(
        "updatedMovieListSomeOther"
      );
      // console.log("localStorageSomeOtherMovies", localStorageSomeOtherMovies);
      dispatch(updateAndAddMoviesListSomeOther(localStorageSomeOtherMovies));
    }

    asyncWrapper(
      getSomeOtherMovieIdsList,
      getMovieData,
      callGetMovieImageData
    ).then(response => {
      // console.log("response 4 : after promise : Some Other : ", response);
      dispatch(updateAndAddMoviesListSomeOther(response));
    });
  };
};

export const getLatestMovies = () => {
  return dispatch => {
    // Check if we've already called the api and stored the result in localStorage
    if (
      localStorageHandler.getLocalStorageKeyCheck("updatedMovieListLatest")
    ) {
      // console.log("local storage key confirmed in actions");
      let localStorageLatestMovies = localStorageHandler.getLocalStorage(
        "updatedMovieListLatest"
      );
      dispatch(updateAndAddMoviesListTopRated(localStorageLatestMovies));
    }

    asyncWrapper(
      getLatestMovieIdsList,
      getMovieData,
      callGetMovieImageData
    ).then(response => {
      dispatch(updateAndAddMoviesListLatest(response));
    });
  };
};

export const verifyInitialListUpdatesAreComplete = () => {
  return {
    type: actionTypes.VERIFY_INITIAL_LIST_UPDATES_ARE_COMPLETE
  };
};

export const updateAndAddMoviesListTopRated = list => {
  return {
    type: actionTypes.GET_TOP_RATED_MOVIES,
    updatedMovieListTopRated: list
  };
};

export const updateAndAddMoviesListSomeOther = list => {
  return {
    type: actionTypes.GET_SOME_OTHER_MOVIES,
    updatedMovieListSomeOther: list
  };
};

export const updateAndAddMoviesListLatest = list => {
  return {
    type: actionTypes.GET_LATEST_MOVIES,
    updatedMovieListLatest: list
  };
};

export const toggleModal = (movie) => {
  return {
    type: actionTypes.TOGGLE_MODAL,
    movie: movie
  }
}

const asyncWrapper = async (func1, func2, func3) => {
  return await func1().then(response => {
    //   console.log('response 1', response)
    return func2(response.movieIds).then(response => {
      // console.log('response 2 is 3', response)
      return func3(response).then(response => {
        //   console.log('response 3', response)
        return response;
      });
    });
  });
};

const getTopRatedMovieIdsList = async () => {
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
      const smallArray = response.data.results; //.slice(0, 10); // shorten array
      for (let obj in smallArray) {
        movieIds.push(smallArray[obj].id.toString()); // push the id as a string to movieIds array
      }
    })
    .catch(error => {
      console.log(error);
    });
  return {
    movieIds
  };
};

const getSomeOtherMovieIdsList = async () => {
  let movieIds = [];
  await axios
    .get("https://api.themoviedb.org/3/movie/popular?", {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1
      }
    })
    .then(response => {
      const smallArray = response.data.results; //.slice(0, 10); // shorten array
      for (let obj in smallArray) {
        movieIds.push(smallArray[obj].id.toString()); // push the id as a string to movieIds array
      }
    })
    .catch(error => {
      console.log(error);
    });
  return {
    movieIds
  };
};

const getLatestMovieIdsList = async () => {
  let movieIds = [];
  await axios
    .get("https://api.themoviedb.org/3/movie/upcoming?", {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1
      }
    })
    .then(response => {
      const smallArray = response.data.results; //.slice(0, 10); // shorten array
      for (let obj in smallArray) {
        movieIds.push(smallArray[obj].id.toString()); // push the id as a string to movieIds array
      }
    })
    .catch(error => {
      console.log(error);
    });
  return {
    movieIds
  };
};

const getMovieData = async movieIdsArray => {
  let MovieObjectsArray = [];
  let promises = [];

  for (let i = 0; i < movieIdsArray.length - 1; i++) {
    promises.push(
      await axios
        .get("https://api.themoviedb.org/3/movie/" + movieIdsArray[i] + "?", {
          params: {
            api_key: apiKey,
            language: "en-US"
          }
        })
        .then(response => {
          MovieObjectsArray.push(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    );
  }

  return Promise.all(promises).then(() => {
    return MovieObjectsArray;
  });
};

const callGetMovieImageData = async MovieObjectsArray => {
  let prefix = "https://image.tmdb.org/t/p/w342";
  let moviesWithImages = MovieObjectsArray;
  let promises = [];

  for (let i = 0; i < moviesWithImages.length - 1; i++) {
    // Portrait
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
    // Landscape
    // promises.push(
    //   axios
    //     .get(
    //       "https://api.themoviedb.org/3/movie/" +
    //         moviesWithImages[i].id +
    //         "/images?",
    //       {
    //         params: {
    //           api_key: apiKey,
    //           page: 1,
    //           language: "en-US",
    //           include_image_language: null
    //         }
    //       }
    //     )
    //     .then(response => {
    //       moviesWithImages[i].posterUrl =
    //         prefix + response.data.posters[0].file_path;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // );
  }

  return Promise.all(promises).then(() => {
    return moviesWithImages;
  });
};
