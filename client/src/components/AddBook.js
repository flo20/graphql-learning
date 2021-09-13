import React, { Fragment } from "react";
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


const handleChange = () => {
  console.log("Changes");
};

const AddBooks = (props) => {
   const data = props.data;
   console.log(data);
  return (
    <div>
        <div>
          <div>
            Authors
            <select onChange={handleChange}>
              <option value="">Select Author</option>
            {(data.loading === false) && (
              <Fragment>
                {data.authors.map(author => {
                  return (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  )
                })}
                </Fragment>
             )}
            
            </select>
          </div>
        </div>
    </div>
  );
}

export default graphql(getAuthorsQuery)(AddBooks);



   