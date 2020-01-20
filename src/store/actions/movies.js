import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../secret/secret";

export const getTopRatedMovies = () => {
  return dispatch => {
    asyncWrapper(
      getTopRatedMovieIdsList,
      getMovieData,
      callGetMovieImageData
    ).then(response => {
      console.log("response 4 : after promise : ", response);
      dispatch(updateAndAddMoviesListTopRated(response));
    });
  };
};

export const getSomeOtherMovies = () => {
  return dispatch => {
    asyncWrapper(
      getSomeOtherMovieIdsList,
      getMovieData,
      callGetMovieImageData
    ).then(response => {
      console.log("response 4 : after promise : ", response);
      dispatch(updateAndAddMoviesListSomeOther(response));
    });
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
           type: actionTypes.GET_TOP_RATED_MOVIES,
           updatedMovieListTopRated: list
         };
       };

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
      const smallArray = response.data.results //.slice(0, 10); // shorten array
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

  return Promise.all(promises).then(() => {
    return moviesWithImages;
  });
};
