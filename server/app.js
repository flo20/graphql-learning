const express = require("express");
const {graphqlHTTP} = require("express-graphql");
/*the installed express-graphql allows express to understand graphql. 
It allows a simple way to create a server that runs the graphql api */
const schema = require("./schema/schema");
const cors = require("cors");
require('dotenv').config();
const mongoose= require("mongoose");


const app = express();
//allow cross origin
app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

//Middleware
app.use("/graphql",graphqlHTTP({
schema,
//the tool used to check the queries for the graphql server
graphiql:true
}));


app.listen(4000,()=>{
    console.log("Running server on port 4000");
})