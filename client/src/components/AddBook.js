import React from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getAuthorsQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

function AddBooks(props) {
  const fetchAuthorData = props.data;
  console.log(fetchAuthorData);

  return (
    <div>
      {fetchAuthorData.loading === false && (
        <div>
          {fetchAuthorData.authors.map((author) => {
            return <div key={author.id}>{author.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default graphql(getAuthorsQuery)(AddBooks);
