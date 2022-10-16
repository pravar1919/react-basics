import React, { Component } from "react";
import Table from "./common/table";
import Like from "./likes";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genere.name", label: "Genere" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rental" },
    {
      key: "like",
      content: (item) => (
        <Like liked={item.like} onLike={() => this.props.onLike(item)} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { sortColumn, onSort, items } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={items}
      />
    );
  }
}

export default MovieTable;
