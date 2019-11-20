import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://fcg-fe-test.herokuapp.com/',
});