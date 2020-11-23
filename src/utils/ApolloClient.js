import ApolloClient from 'apollo-boost';
import Constants from "expo-constants";

const createApolloClient = () => {
  console.log(Constants.manifest);
  return new ApolloClient({
    uri: Constants.manifest.extra.apolloUrl,
  });
};

export default createApolloClient;