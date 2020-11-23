import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://10.69.32.205:5000/graphql',
  });
};

export default createApolloClient;