import React, { useState } from "react";

import "./BookForm.css";

const BookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const IDChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      ID: enteredID,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveBookData(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredID("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book__controls">
        <div className="new-book__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>Author</label>
          <input
            type="text"
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>ID</label>
          <input
            type="number"
            min="001"
            step="1"
            value={enteredID}
            onChange={IDChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>Price</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-book__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default BookForm;
