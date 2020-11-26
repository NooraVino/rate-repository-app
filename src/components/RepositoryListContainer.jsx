import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const changeToThousands = (value) => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : value;
};
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {


  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const history = useHistory();
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
          <View>
            <RepositoryItem item={item} />
          </View>
          </TouchableOpacity>
    )}
    />
  );
};

export default RepositoryListContainer;