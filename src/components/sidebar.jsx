import React from "react";

const SideBar = ({
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

SideBar.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default SideBar;
