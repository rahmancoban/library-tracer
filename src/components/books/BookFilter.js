import React from "react";

import "./BookFilter.css";

const BookFilter = (props) => {
  const filterYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="book-filter">
      <div className="book-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;
