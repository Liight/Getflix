import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions/index";

import MovieRowsDisplay from './containers/MovieRowsDisplay/MovieRowsDisplay';
import MovieFeature from './containers/MovieFeature/MovieFeature';
import TopBar from './components/Navigation/TopBar/TopBar';
import Footer from './components/Navigation/Footer/Footer';

class App extends Component {
  state = {
    moviesTopRated: [],
    moviesSomeOther: []
  };

  componentWillMount() {
    if (!this.props.initialListsUpdatesComplete){
      this.props.onLoadTopRatedMovies();
      this.props.onLoadSomeOtherMovies();
      setTimeout(() => {
        this.props.onVerifyInitialListUpdatesAreComplete();
      }, 1000)
      
    } else {
      console.log('no need to spam external apis, this has been handled and call responses have been added to global state for caching.')
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.moviesTopRated !== this.state.moviesTopRated || nextProps.moviesSomeOther !== this.state.moviesSomeOther
  };

  componentDidUpdate() {
    // console.log("component updated : ", this.state);
    this.setState(prevState => {
      return {
        ...prevState,
        moviesTopRated: this.props.moviesTopRated,
        moviesSomeOther: this.props.moviesSomeOther
      };
    });
  }

  render() {
    console.log('App rendered')
          // This is to fix an issue where react starts requiring RAM resources very fast 
          // on screen widths below 500px this occurs
          // There is a lot of dimensions reading with javascript in this application, 
          // this may be the cause of this issue, requires more investigation
          if(window.innerWidth < 500){
            return (
              <div style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>Cannot render screen to small</div>
            )
          }
          // Leave ^^^^^^


          

            //  console.log("render", this.state);
             // Top Rated Row
             let topRatedMovieRow =
               this.state.moviesTopRated.length > 0 ? (
                 <MovieRowsDisplay
                   movieList={this.state.moviesTopRated}
                   category={"Top Rated"}
                 />
               ) : (
                 <p style={{ color: "white" }}>Loading...</p>
               );

             // Some Other Row
             let someOtherMovieRow =
               this.state.moviesSomeOther.length > 0 ? (
                 <MovieRowsDisplay movieList={this.state.moviesSomeOther} category={"Some Other"}/>
               ) : (
                 <p style={{ color: "white" }}>Loading...</p>
               );

             // Feature
             let featureMovies =
               this.state.moviesSomeOther.length > 0 ? (
                 <MovieFeature movieList={this.state.moviesSomeOther} />
               ) : (
                 <p style={{ color: "white" }}>Loading...</p>
               );

             return (
               <div className="App">
               <TopBar />
                 {featureMovies}
                 {topRatedMovieRow}
                 {someOtherMovieRow}
                 <Footer />
               </div>
             );
           }
}

const mapStateToProps = state => {
  return {
    moviesTopRated: state.movies.updatedMovieListTopRated,
    moviesSomeOther: state.movies.updatedMovieListSomeOther,
    initialListsUpdatesComplete: state.movies.initialListsUpdatesComplete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopRatedMovies: () => dispatch(actions.getTopRatedMovies()),
    onLoadSomeOtherMovies: () => dispatch(actions.getSomeOtherMovies()),
    onVerifyInitialListUpdatesAreComplete: () => dispatch(actions.verifyInitialListUpdatesAreComplete())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
