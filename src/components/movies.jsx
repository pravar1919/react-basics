import React, { Component } from "react";
import { getMovies } from "../services/movieData";
import Pagination from "./common/pagination";
import { getGenere } from "../services/fakeGenereData";
import Like from "./likes";
import paginate from "../utils/paginate";
import SideBar from "./sidebar";

class Movies extends Component {
  state = {
    movies: [],
    genere: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({ genere: getGenere(), movies: getMovies() });
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
  handleGenereSelect = (g) => {
    console.log("clicked", g);
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, genere } = this.state;

    if (count === 0) return <p>There is no Movie in the database.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 mt-5" style={{ marginTop: "15px" }}>
            <SideBar items={genere} onItemSelect={this.handleGenereSelect} />
          </div>
          <div className="col-8">
            <div className="mt-5">You have {count} movies.</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genere</th>
                  <th>Stock</th>
                  <th>Rental</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genere.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.like}
                        onLike={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCounts={count}
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
