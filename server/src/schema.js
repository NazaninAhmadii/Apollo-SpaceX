import pkg from 'apollo-server';
const {gql} = pkg;

const typeDefs = gql`
    # schema goes here

  type Query {
    launches(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type  Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type Mutation {
    #book a trip on one or more Launches
    bookTrips(launchIds: [ID]!): TripUpdateResponse!

    #cancel a trip that they previously booked
    cancelTrip(launchId: ID!): TripUpdateResponse!

    #log in by providing their email address
    login(email: String): User
  }

`;


export default typeDefs;