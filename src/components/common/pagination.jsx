import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCounts, pageSize } = props;

  const pageCount = Math.ceil(itemCounts / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className="page-item">
              <a className="page-link">{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
