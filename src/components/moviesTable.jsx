import React from "react";
import Like from "./likes";

const Table = (props) => {
  const { items, onLike, onDelete } = props;
  return (
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
        {items.map((movie, index) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genere.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.like} onLike={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
