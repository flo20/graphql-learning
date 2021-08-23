//creating schema 
const graphql = require("graphql");
const _ = require("lodash");

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;

//dummy data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId:'1'},
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId:'2'},
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3',  authorId:'3' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4',  authorId:'2' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5',  authorId:'3' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6',  authorId:'3' },
];
const authors = [
    { name: 'Patrick Rothfuss', age: 50,  id: '1' },
    { name: 'Florence Adiamah', age: 70, id: '2' },
    { name: 'Patience Anipa', age: 60, id: '3' },
];


//defining the types
const BookType = new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name: {type:GraphQLString},
        genre:{type:GraphQLString},
        //Added Type relations, associating author wit the book
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent);
                return _.find(authors,{id:parent.authorId})
            }
        }
    })
})
const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name: {type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books,{authorId:parent.id})
            }
        }
    })
})

// defining root queries ///how yow initially jump into the graph
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type: GraphQLID}},
            //using resolve function to fetch data
            resolve(parent,args){
                //code to get data from db/other sources
             return   _.find(books,{id:args.id});

            }
        },
        author:{
            type:AuthorType,
            args:{id:{type: GraphQLID}},
            //using resolve function to fetch data
            resolve(parent,args){
                //code to get data from db/other sources
             return   _.find(authors,{id:args.id});

            }
        },
        books:{
            type: new GraphQLList(BookType),
            args:{id:{type: GraphQLID}},
            resolve(parent,args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            args:{id:{type: GraphQLID}},
            resolve(parent,args){
                return authors
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})