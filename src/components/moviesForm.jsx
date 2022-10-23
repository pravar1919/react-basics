import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MoviesForm = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1>Movies Form {params.id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => navigate("/movies")}>
        Save
      </button>
    </>
  );
};

export default MoviesForm;
