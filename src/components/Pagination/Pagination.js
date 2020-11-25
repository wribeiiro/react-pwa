import React, { useEffect, useState } from "react";

// Styles
import "./Pagination.scss";

function Pagination({ totalResults, currentPage, paginate, pageSize }) {
  const [pageNumbers, setPageNumbers] = useState([]);

  // Set Page Numbers
  useEffect(() => {
    const totalPageCount = Math.ceil(totalResults / pageSize);
    const page = [];

    for (let index = 1; index <= totalPageCount; index++) {
      page.push(index);
    }

    setPageNumbers(page);
  }, [totalResults, currentPage, pageSize]);

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="pagination__pager">
          <button onClick={() => paginate(currentPage - 1)}>
            Anterior
          </button>
        </li>
      )}
      {pageNumbers.map((page, index) => {
        return (
          <li
            key={index}
            className={
              currentPage === page
                ? "pagination__pager pagination__pager--number pagination__pager--active"
                : "pagination__pager pagination__pager--number"
            }
          >
            <button onClick={() => paginate(page)}>{page}</button>
          </li>
        );
      })}
      {currentPage < pageNumbers.length && (
        <li className="pagination__pager">
          <button onClick={() => paginate(currentPage + 1)}>
            Próxima
          </button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
