module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql', // Default is /graphql
      shadowCRUD: true, // Automatically generates CRUD operations
      playgroundAlways: true, // Enables the GraphQL Playground in all environments
      depthLimit: 7, // Limits query depth to prevent performance issues
      amountLimit: 100, // Limits the number of results in a query
    },
  },
};