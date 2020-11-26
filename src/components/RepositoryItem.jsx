import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { changeToThousands } from './RepositoryListContainer';
import * as Linking from "expo-linking";
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

const RepositoryItem = ({ item, singleView }) => {

  return (

    <View style={styles.container} >

      <View style={styles.mainContainer}>
        <View >
          <Image style={styles.imageContainer}
            source={{ uri: item.ownerAvatarUrl }} />
        </View>

        <View>
          <Text fontSize="subheading" testID="fullname">{item.fullName}</Text>
          <Text color="textSecondary" testID="description">{item.description}</Text>
          <Text buttonStyle="button" testID="language">{item.language}</Text>
        </View>

      </View>

      <View style={styles.sectionContainer}>
        <View>
          <Text color="textSecondary" >Forks </Text>
          <Text fontWeight="bold" testID="forks">{changeToThousands(item.forksCount)}</Text>
        </View>
        <View>
          <Text color="textSecondary">Stars </Text>
          <Text fontWeight="bold" testID="stars">{changeToThousands(item.stargazersCount)}</Text>
        </View>
        <View>
          <Text color="textSecondary">Rating </Text>
          <Text fontWeight="bold" testID="rating">{item.ratingAverage}</Text>
        </View>

        <View>
          <Text color="textSecondary">Reviews</Text>
          <Text fontWeight="bold" testID="review">{item.reviewCount}</Text>
        </View>
      </View>
      {singleView ? (
        <View>
          <Text buttonStyle="buttonFlex" onPress={() => Linking.openURL(item.url)}>Open in GitHub</Text>
        </View>
      ) :
        (<View></View>
        )}
    </View>


  );
};


export default RepositoryItem;