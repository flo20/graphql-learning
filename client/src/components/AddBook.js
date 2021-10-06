import React, { Fragment,useState } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getAuthorsQuery } from "../queries/queries";
import { GrAddCircle } from "react-icons/gr";

// const handleChange = () => {
// 	console.log("Changes");
// };

const AddBooks = (props) => {
  const [updateValue, setUpdateValue] = useState({
    bookName: "",
    bookGenre: "",
    authorId: ""
  });

  const data = props.data;
  console.log(data);
  
  const handleInputChange = (event) => {
		console.log("Yes change");
	};
	return (
		<form>
			<div>
				BookName:
				<input
					type="text"
					value={updateValue}
					onChange={handleInputChange}
				/>
				<br />
				Genre:
				<input type="text" />
				<div>
					Authors
					<select onChange={handleInputChange}>
						<option value="">Select Author</option>
						{data.loading === false && (
							<Fragment>
								{data.authors.map((author) => {
									return (
										<option key={author.id} value={author.id}>
											{author.name}
										</option>
									);
								})}
							</Fragment>
						)}
					</select>
					<br />
					<GrAddCircle />
				</div>
			</div>
		</form>
	);
};

export default graphql(getAuthorsQuery)(AddBooks);
