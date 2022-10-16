import React, { Component } from "react";
import { getMovies } from "../services/movieData";
import Pagination from "./common/pagination";
import { getGenere } from "../services/fakeGenereData";
import paginate from "../utils/paginate";
import SideBar from "./sidebar";
import Table from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genere: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genere = [{ _id: "all", name: "All Genere" }, ...getGenere()];
    this.setState({ genere, movies: getMovies() });
  }
  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenereSelect = (genere) => {
    this.setState({ selectedGenere: genere, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genere,
      selectedGenere,
    } = this.state;

    if (count === 0) return <p>There is no Movie in the database.</p>;

    const filtered =
      selectedGenere && selectedGenere._id
        ? allMovies.filter((m) => m.genere._id === selectedGenere._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 mt-5" style={{ marginTop: "15px" }}>
            <SideBar
              items={genere}
              selectedItem={selectedGenere}
              onItemSelect={this.handleGenereSelect}
            />
          </div>
          <div className="col-8">
            <div className="mt-5">You have {filtered.length} movies.</div>
            <Table
              items={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemCounts={filtered.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
