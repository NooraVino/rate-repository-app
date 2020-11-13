import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem =({item}) => (
    <View>
    <Text>Full name: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Forks: {item.forksCount}</Text>
    <Text>Stars: {item.stargazersCount}</Text> 
    <Text>Rating: {item.ratingAverage}</Text> 
    <Text>Reviews: {item.reviewCount}</Text>  
  </View>
  );


export default RepositoryItem;