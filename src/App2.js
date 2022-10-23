import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar2";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";

class App2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesForm />} />
          <Route path="/" exact element={<Navigate to="/movies" replace />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
    );
  }
}

export default App2;
