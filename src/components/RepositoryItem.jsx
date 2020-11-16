import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 3,
  },
  imageStyles: {
    borderRadius: 4,
    height: 48,
    width: 48,
  },
  repoInfo: {
    flex: 13,
    justifyContent: 'space-between',
  },
  language: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  repoStats: {
    justifyContent: 'space-around'
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  boldText: {
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: theme.fontWeights.bold,
  },
  bodyText: {
    paddingVertical: 4,
    color: theme.colors.secondary,
  },
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    //resizeMode: 'stretch',
  },
});



const RepositoryItem = ({ item }) => {

  const changeToThousands = (value) => {
    return value >= 1000
      ? `${Math.round(value / 100) / 10}k`
      : value;
  };
  return (

    <View >
      <View >
        <Image
          style={styles.stretch}
          source={{uri: item.ownerAvatarUrl}} />
      </View>


      <View>
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text color="textSecondary">{item.description}</Text>
      <Text style={styles.language}>{item.language}</Text>
      </View>
      
      
     
      <Text>Forks: {changeToThousands(item.forksCount)}</Text>
      <Text>Stars: {changeToThousands(item.stargazersCount)}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>

    </View>
  );
};


export default RepositoryItem;