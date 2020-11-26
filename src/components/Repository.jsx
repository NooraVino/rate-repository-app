import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View } from 'react-native';
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const Repository = () => {

  const { id } = useParams();
 
  const { data, loading } = useQuery(GET_REPOSITORY, { variables: { id }, });
  
  if (loading) return null;

  return (
    <View>
      <RepositoryItem item={data.repository} singleView={true} />
    </View>
  );

};

export default Repository;