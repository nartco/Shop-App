import React, { useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SneakersItemEdit from "./SneakersItemEdit";
import { useDispatch } from "react-redux";
import { removeSneakers } from "../store/actions/sneakers";

const SneakersList = props => {
  const dispatch = useDispatch();

  const remove = id => dispatch(removeSneakers(id));

  const renderSneakersList = itemData => (
    <SneakersItemEdit
      sneakersId={itemData.item.id}
      title={itemData.item.title}
      imageUrl={itemData.item.imageUrl}
      price={itemData.item.price}
      onRemove={() => remove(itemData.item.id)}
      onEdit={() => {
        props.navigation.navigate("Edit", {
          sneakersId: itemData.item.id
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
