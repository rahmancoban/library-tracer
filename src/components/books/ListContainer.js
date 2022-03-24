import React, { useState } from "react";

import BooksA from "./BooksA";

import "./ListContainer.css";

import Card from "../UI/Card";

import BookFilter from "./BookFilter";

import BookChart from "./BooksChart";

const ListContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredBooksByYear = props.items.filter((books) => {
    return books.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="container">
        <BookFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <BookChart books={filteredBooksByYear}/>
        <BooksA items={filteredBooksByYear} />
      </Card>
    </div>
  );
};

export default ListContainer;
