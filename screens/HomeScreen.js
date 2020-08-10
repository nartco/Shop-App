import React from "react";
import SneakersList from '../components/SneakersList'
import { useSelector } from 'react-redux'

const HomeScreen = props => {
  const selectedSneakers = useSelector(state => state.sneakers.filtersSneakers)

  return <SneakersList listData={selectedSneakers} navigation={props.navigation} />
};


export default HomeScreen;
