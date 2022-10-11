import React from "react";

const SideBar = (props) => {
  const { items, onItemSelect, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map((g) => {
        return (
          <li
            key={g[valueProperty]}
            onClick={() => onItemSelect(g)}
            className="list-group-item">
            {g[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

SideBar.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default SideBar;
