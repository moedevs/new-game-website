import * as React from "react";
import * as B from "bloomer";
import ReactPaginate from "react-paginate";
import "./paginate.scss";

export const Paginator = () =>
  <div className="centered">
    <ReactPaginate
      pageCount={10}
      containerClassName="pagination"
      pageRangeDisplayed={2}
    />
  </div>;

