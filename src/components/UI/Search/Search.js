import React, { Component } from "react";
import { connect } from "react-redux";
import "./Search.css";
import * as actions from "../../../store/actions";
import * as dims from "../../../utility/dimensions";

class Search extends Component {
  state = {
    inputText: ""
  };
  changeHandler = str => {
    this.setState({ inputText: str });
  };
  startModal = () => {
    this.props.onGetSearch(this.state.inputText);
    setTimeout(() => {
      console.log("searched movie ::: ", this.props.searchedMovie);
      if (!this.props.searchedMovie.Title) {
      } else {
        this.props.onToggleModal(this.props.searchedMovie);
        this.props.onToggleGlobalScrollbars();
      }
    }, 1000);
  };

_handlePress = (e) => {
  if(e.key === 'Enter'){
    this.startModal();
  }
}

  render() {
    return (
      <div
        className="search-container-outer"
        style={{ width: dims.column40Width }}
      >
        <div className="search-container-inner">
          <div className="icon-container" onClick={() => this.startModal()}>
            <span style={{ color: "white" }}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACZklEQVRIia2UP0xTURTGf+fZQkRQaEtphEQHFljcjSGYuONEcDJMGCBMJkR3RwcGTFxEF2OcZDdRBGfigC4MDv6hffe19zYCafp8x6EtStO/wTOd3Pt93++el3evUFe+7w9IT888KjOoTiCkUAwiXxB9E5VKG+l0+le9r1nJqXDn5kRZA9ItPFlBV5KDg687AXi1xlj7UJSXQFqEbUHntBwbTV662EsYH1Phjgo7wIgir4y1DzqdAt+5OWNdZKwr+9bea6U1zi0a68rGuiiwdrZ9uO8PGOuyxjptF14HUWPdz1wu199OvGKs08DarU7CTw5WcDvGOjXOLbfSeajMVPsn3QDwWAdAmWktU50AiMrx7W7ypRz/UGmYbA0QkgCpVJ/pBlBInq/oteJvDlACAGOOUt0AEvn8MABS8TcHCJ8B6AmnugFEsVhFr+y1A2xW+6VOw1VVJKrq//obA6JSaQPIinLDOLfYCSAoFpcQrgMHUan0or3B2tnaTW4HMc4tV2+y+rZ4v132yWNXeVvkESCqfMRj3QvD7UQikcvn8+koFpuSiNrJAVAwkUa3RoaGPrUF1CZRZA3ItDjUgSKPQVcFUgrGU1mN0CuEsafDwxd+NAUA5HK5fq+39y7KbYRJlBSCQdlD2AyPj59nMpnDbKFwzRPvrcC/v/e+/A5vJpPJb00B3VRQKM6r6LO65VMQr4Gv44rQqw2Wx/Vc7F0QBGNwxgl8//CyxMMtYLzB9j5hfPpMAABjjkaJld83geye6RMBpFJ93wnj08B+g+3kmSeoVaNJFF34X/knkMC6XWPdV9/aBYA/Bk45Br3HCaoAAAAASUVORK5CYII="
                alt=""
              />
            </span>
          </div>
          <div className="search-box">
            <input
              onChange={event => this.changeHandler(event.target.value)}
              onKeyDown={e => {
                this._handlePress(e);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeBigInfoKey: state.movies.activeBigInfoKey,
    searchedMovie: state.movies.searchedMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSearch: movieNameAsString =>
      dispatch(actions.getSingleMovie(movieNameAsString)),
    onToggleModal: movie => dispatch(actions.toggleModalFromSearch(movie)),
    onToggleGlobalScrollbars: () => dispatch(actions.toggleGlobalScrollbars()) // follow this thread
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
