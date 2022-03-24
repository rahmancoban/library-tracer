import React from "react";

import "./BooksList.css";

import Date from "./Date";

import Card from "../UI/Card";

const BookList = (props) => {
  return (
    <Card className="books-list">
      <Date date={props.time} />
      <div className="books-list__id">{props.bkID}</div>
      <div className="books-list__description">
        <h3 className="">
          {props.name}
          <br />
          <p>{props.writer}</p>
        </h3>
      </div>
      <div className="books-list__price">₺{props.cost}</div>
    </Card>
  );
};

export default BookList;
