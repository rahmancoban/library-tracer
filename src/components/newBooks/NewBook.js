import React, { useState } from "react";

import "./NewBook.css";

import BookForm from "./BookForm";

const NewBook = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    props.onAddBook(bookData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-book">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Book</button>
      )}
      {isEditing && (
        <BookForm
          onSaveBookData={saveBookDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewBook;
