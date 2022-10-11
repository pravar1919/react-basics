import React from "react";
import { getGenere } from "../services/fakeGenereData";

const SideBar = (props) => {
  //const { allGenere } = props;
  console.log(props.allGenere);
  return (
    <ul className="list-group">
      {/* {allGenere.map((g) => {
        <li className="list-group-item active">{g.name}</li>;
      })} */}
    </ul>
  );
};

export default SideBar;
