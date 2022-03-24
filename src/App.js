import React, { useState } from "react";

import NewBook from "./components/newBooks/NewBook";
import ListContainer from "./components/books/ListContainer";


const initial_books = [
  {
    id: "e1",
    date: new Date(2022, 2, 14),
    bookID: "001",
    title: "Harry Potter",
    author: "J.K Rowling",
    price: "5",
  },
  {
    id: "e2",
    date: new Date(2021, 3, 21),
    bookID: "002",
    title: "The Bronte Sisters",
    author: "Charlotte Bronte",
    price: "7",
  },
  {
    id: "e3",
    date: new Date(2020, 4, 5),
    bookID: "003",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: "4",
  },
];



function App() {

  const [books, setBooks] = useState(initial_books)


  const addBookHandler = (book) => {
    setBooks(prevBooks => {
      return [book, ...prevBooks];
    })
  };

  return (
    <div>
      <NewBook onAddBook={addBookHandler} />
      <ListContainer items={books} />
    </div>
  );
}

export default App;
