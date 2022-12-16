import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./item";
import { styles } from "./styles";

const Todos = ({ items }) => {
    const renderItem = ({ item }) => <TodoItem {...item} />;
    const keyExtractor = (item) => item.id.toString();
    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
};

export default Todos;