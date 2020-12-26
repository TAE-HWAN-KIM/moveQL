import { GraphQLServer } from "graphql-yoga";
//import testresolvers from "./graphql/testresolvers";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: [
    `type Movie {
        id: Int!
        title: String!
        rating: Float
        description_intro: String
        language: String
        medium_cover_image: String
        genres: [String]
     }
      
      type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int!): Movie
        suggestions(id: Int!): [Movie]!
      }
      `
  ],
  resolvers : resolvers
});

// const server = new GraphQLServer({
//        typeDefs: './graphql/test.graphql',
//        resolvers : testresolvers
//     });
  
server.start(() => console.log("Graphql Server Running"));