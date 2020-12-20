import pkg from 'apollo-server';
const {ApolloServer} = pkg;
import typeDefs from './schema.js';

const server = new ApolloServer({typeDefs});

server.listen().then(()=>{
    console.log('Server is running on port 4000');
});