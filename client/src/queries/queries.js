import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
	{
		authors {
			name
			age
			id
		}
	}
`;


const getBooksQuery = gql`
	{
		books {
			name
			genre
			id
		}
	}
`;

export { getAuthorsQuery, getBooksQuery };