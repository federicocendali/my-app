import React from "react";
import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "./styles";

const List = ({ information, doAction }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.itemContainer} onPress={() => doAction(item.id)}>
        <Text style={styles.item}>{item.value}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        renderItem={renderItem}
        data={information}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default List;
