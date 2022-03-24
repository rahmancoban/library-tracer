import React from "react";

import './BooksA.css';

import BookList from "./BooksList";



const BooksA = props =>{

 
    if(props.items.length === 0){
        return <h2 className="books-list__fallback">No Books Found</h2>
    }


  return(
      <ul>
          { props.items.map((books) => (
      <BookList
        key={books.id}
        time={books.date}
        bkID={books.bookID}
        name={books.title}
        writer={books.author}
        cost={books.price}
      />
    ))
  }
      </ul>
  );
  
}

export default BooksA;