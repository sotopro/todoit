import React, { useState} from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { TodoList } from "../../components";
import { styles } from "./styles";
import { todos } from "../../constants/data";
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "../../constants/themes";
 
const Home = () => {
    const initialTodos = todos.sort((a, b) => a.isCompleted - b.isCompleted);
    const [localData, setLocalData] = useState(
        initialTodos
    );

    const [isHidding, setIsHidding] = useState(false);

    const handleHideCompleted = () => {
        if(isHidding){
            setIsHidding(false);
            setLocalData(initialTodos);
            return;
        }
        setIsHidding(!isHidding);
        setLocalData(localData.filter(todo => !todo.isCompleted));
    }

    const hiddenText = isHidding ? "Show Completed" : "Hide Completed";
    const todosToday = localData.filter(todo => todo.isToday);
    const todosTomorrow = localData.filter(todo => !todo.isToday);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>TodoIt</Text>
                <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/women/80.jpg'}}
                    style={styles.image}
                />
            </View>
            <View style={styles.listContainer}>
                <View style={styles.headerList}>
                    <Text style={styles.listTitle}>Today</Text>
                    <TouchableOpacity onPress={handleHideCompleted}>
                        <Text style={styles.subTitle}>{hiddenText}</Text>
                    </TouchableOpacity>
                </View>
                <TodoList items={todosToday} />
                <View style={styles.headerList}>
                    <Text style={styles.listTitle}>Tomorrow</Text>
                </View>
                <TodoList items={todosTomorrow} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="add" size={24} color={colors.white} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Home;