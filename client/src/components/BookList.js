import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../queries/queries";



function BookList(props) {
  const fetchedData = props.data;
  console.log(fetchedData);

  // console.log(props);

  return (
    <div>
      {fetchedData.loading === false && (
        <ul id="book-list">
          {fetchedData.books.map((book) => {
            return <div key={book.id}>{book.name}</div>;
          })}
        </ul>
      )}
    </div>
  );
}

export default graphql(getBooksQuery)(BookList); //take the graphql and bind the getBooksQuery function to the Booklist
