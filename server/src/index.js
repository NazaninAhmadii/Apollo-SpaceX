import {ApolloServer} from 'apollo-server';

const typeDefs = require('./schema');

const server = new ApolloServer({typeDefs});