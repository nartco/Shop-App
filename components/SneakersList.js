import React, { useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SneakersItem from "./SneakersItem";

const SneakersList = props => {
  const renderSneakersList = itemData => (
    <SneakersItem
      sneakersId={itemData.item.id}
      title={itemData.item.title}
      imageUrl={itemData.item.imageUrl}
      size={itemData.item.sizeSelected ? itemData.item.sizeSelected : itemData.item.size}
      quantity={itemData.item.quantity ? itemData.item.quantity : null}
      price={itemData.item.price}
      onSelectSneakers={() => {
        props.navigation.navigate("Details", {
          sneakersId: itemData.item.id,
          sneakersTitle: itemData.item.title,
          categoryId: itemData.item.categoryIds
        });
      }}
    />
  );
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderSneakersList}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default SneakersList;
