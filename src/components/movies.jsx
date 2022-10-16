import React, { Component } from "react";
import { getMovies } from "../services/movieData";
import Pagination from "./common/pagination";
import { getGenere } from "../services/fakeGenereData";
import paginate from "../utils/paginate";
import SideBar from "./sidebar";
import MovieTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genere: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genere = [{ _id: "", name: "All Genere" }, ...getGenere()];
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    // first filter -> sort -> paginate in this order
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenere,
      sortColumn,
    } = this.state;
    const filtered =
      selectedGenere && selectedGenere._id
        ? allMovies.filter((m) => m.genere._id === selectedGenere._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, genere, selectedGenere, sortColumn } =
      this.state;

    if (count === 0) return <p>There is no Movie in the database.</p>;
    const { totalCount, data } = this.getPagedData();
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
            <div className="mt-5">You have {totalCount} movies.</div>
            <MovieTable
              items={data}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemCounts={totalCount}
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
