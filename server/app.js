const express = require("express");
const {graphqlHTTP} = require("express-graphql");
/*the installed express-graphql allows express to understand graphql. 
It allows a simple way to create a server that runs the graphql api */
const schema = require("./schema/schema");
require('dotenv').config();
const mongoose= require("mongoose");


const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


//Middleware
app.use("/graphql",graphqlHTTP({
schema,
//the tool used to check the queries for the graphql server
graphiql:true
}));


app.listen(4000,()=>{
    console.log("Running server on port 4000");
})