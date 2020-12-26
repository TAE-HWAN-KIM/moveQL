// import { getMovies, getMovie, getSuggestions } from "./db";

// const resolvers = {
//   Query: {
//     movies: (_, { rating, limit }) => getMovies(limit, rating),
//     movie: (_, { id }) => getMovie(id),
//     suggestions: (_, { id }) => getSuggestions(id)
//   }
// };

// export default resolvers;
const thkim = {
    personID: 0,
    name: 'thkim',
    age: 33,
    test: 'thkim test message'
};

const thkim2 = {
    personID: 1,
    name: 'thkim2',
    age: 0,
    test: 'thkim2 test message'
};

const people = [
    thkim,
    thkim2
];

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {personID}) => {
            console.log(_);
            console.log(personID);
            console.log(people);
            const temp = people.filter(r => r.personID == personID)[0]
            console.log(temp);
           return temp
        },
        age: () => 30,
        test: () => '123'
    }
}

export default resolvers;