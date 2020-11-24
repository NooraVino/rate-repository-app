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