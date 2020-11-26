import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query Repositories{
    repositories {
      edges{
        node{
          id
          fullName
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
          ownerAvatarUrl
          description
          language
        }
      }
    
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`; 

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      reviewCount
      ratingAverage
      stargazersCount
      description
      language
      ownerAvatarUrl
      forksCount
    }
  }
`;