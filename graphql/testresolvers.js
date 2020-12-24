// import { getMovies, getMovie, getSuggestions } from "./db";

// const resolvers = {
//   Query: {
//     movies: (_, { rating, limit }) => getMovies(limit, rating),
//     movie: (_, { id }) => getMovie(id),
//     suggestions: (_, { id }) => getSuggestions(id)
//   }
// };

// export default resolvers;


const resolvers = {
    Query: {
        name: () => 'testthkim',
        age : () => 33,
        test :() => '123'
    }
}

export default resolvers;