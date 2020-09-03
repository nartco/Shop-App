import React from "react";
import SneakersList from "../components/SneakersList";
import { useSelector, useDispatch } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { View, StyleSheet, Picker } from "react-native";
import { setFilters }  from '../store/actions/sneakers'

const HomeScreen = props => {
  const selectedSneakers = useSelector(state => state.sneakers.filtersSneakers);

  const dispatch = useDispatch()

  const filters = brand => dispatch(setFilters(brand))


  const placeholder = {
    label: 'All brand',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <View style={{ flex: 1 }}>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={value => filters(value)}
        placeholder={placeholder}
        items={[
          { label: "Nike", value: "Nike" },
          { label: "Adidas", value: "Adidas" },
          { label: "Jordan", value: "Jordan" },
          { label: "Puma", value: "Puma" }
        ]}
      />
      <SneakersList listData={selectedSneakers} navigation={props.navigation} />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    textAlign: 'center',

    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default HomeScreen;
