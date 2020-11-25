
import React from 'react';
import { render } from "@testing-library/react-native";
import RepositoryListContainer, {changeToThousands} from './RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const {getAllByTestId, debug } = render (<RepositoryListContainer repositories={repositories} />);
      //debug();


      const firstRepository = repositories.edges[0].node;
      const secondRepository= repositories.edges[1].node;

      const allByName = getAllByTestId("fullname");
      expect(allByName[0]).toHaveTextContent('jaredpalmer/formik');
      expect(allByName[1]).toHaveTextContent('async-library/react-async');

      const allByDescription = getAllByTestId("description");
      expect(allByDescription[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(allByDescription[1]).toHaveTextContent('Flexible promise-based React data loader');

      const allByLanguage = getAllByTestId("language");
      expect(allByLanguage[0]).toHaveTextContent('TypeScript');
      expect(allByLanguage[1]).toHaveTextContent( 'JavaScript');

      const allByForks = getAllByTestId("forks");
      expect(allByForks[0]).toHaveTextContent(changeToThousands(firstRepository.forksCount));
      expect(allByForks[1]).toHaveTextContent(changeToThousands(secondRepository.forksCount));

      const allByStars = getAllByTestId("stars");
      expect(allByStars[0]).toHaveTextContent(changeToThousands(firstRepository.stargazersCount));
      expect(allByStars[1]).toHaveTextContent(changeToThousands(secondRepository.stargazersCount));

      const allByRating = getAllByTestId("rating");
      expect(allByRating[0]).toHaveTextContent(firstRepository.ratingAverage);
      expect(allByRating[1]).toHaveTextContent(secondRepository.ratingAverage);

      const allByReview = getAllByTestId("review");
      expect(allByReview[0]).toHaveTextContent(firstRepository.reviewCount);
      expect(allByReview[1]).toHaveTextContent(secondRepository.reviewCount);
    });
  });
});