import React from "react";
import SneakersListEdit from '../components/SneakersListEdit'
import { useSelector } from 'react-redux'

const HomeScreen = props => {
  const selectedSneakers = useSelector(state => state.sneakers.sneakers)

  return <SneakersListEdit listData={selectedSneakers} navigation={props.navigation} />
};


export default HomeScreen;
