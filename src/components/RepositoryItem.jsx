import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },

  mainContainer: {
    flexDirection: 'row',
  },

  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  imageContainer: {
    width: 50,
    height: 50,
    margin: 10
  },

});


const RepositoryItem = ({ item }) => {

  const changeToThousands = (value) => {
    return value >= 1000
      ? `${Math.round(value / 100) / 10}k`
      : value;
  };
  return (

    <View style={styles.container} >

      <View style={styles.mainContainer}>
        <View >
          <Image style={styles.imageContainer}
            source={{ uri: item.ownerAvatarUrl }} />
        </View>

        <View>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text buttonStyle="button">{item.language}</Text>
        </View>

      </View>

      <View style={styles.sectionContainer}>
        <View>
          <Text color="textSecondary">Forks </Text>
          <Text fontWeight="bold" >{changeToThousands(item.forksCount)}</Text>
        </View>
        <View>
          <Text color="textSecondary">Stars </Text>
          <Text fontWeight="bold">{changeToThousands(item.stargazersCount)}</Text>
        </View>
        <View>
          <Text color="textSecondary">Rating </Text>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
        </View>

        <View>
          <Text color="textSecondary">Reviews</Text>
          <Text fontWeight="bold">{item.reviewCount}</Text>
        </View>
      </View>
    </View>
  );
};


export default RepositoryItem;