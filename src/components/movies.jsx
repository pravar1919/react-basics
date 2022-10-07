import React, { Component } from "react";
import { getMovies } from "../services/movieData";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There is no Movie in the database.</p>;
    return (
      <div className="container">
        <div className="mb-5 mt-5">You have {count} movies.</div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Genere</th>
              <th>Stock</th>
              <th>Rental</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <th>{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genere.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
