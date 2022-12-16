import React from "react";
import { View, Text } from "react-native";
import Checkbox from "../../checkbox";
import { styles } from "./styles";

const TodoItem = ({
    id,
    text,
    isCompleted,
    isToday,
    hour,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerCheckbox}>
            <Checkbox 
                onChange={() => {}}
                checked={isCompleted}
                isToday={isToday}
            />
            </View>
            <View style={styles.containerTodo}>
                <Text style={
                    isCompleted ? 
                    {
                        ...styles.text,
                        textDecorationLine: 'line-through'
                    } :
                    {
                        ...styles.text,
                    }
                }>{text}</Text>
                <Text
                    style={
                        isCompleted ? 
                        {
                            ...styles.time,
                            textDecorationLine: 'line-through'
                        } :
                        {
                            ...styles.time,
                        }
                    }
                >{hour}</Text>
            </View>
        </View>
    )
};

export default TodoItem;