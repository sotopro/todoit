import React, {useState} from "react";
import { View, Text, TextInput, Switch, Button, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from "./styles";
import { colors } from '../../constants/themes/index'
import { isAndroid } from "../../utils/functions";

const Create = () => {
    const newDate = new Date();
    const [name, setName] = useState('');
    const [date, setDate] = useState(newDate);
    const [isToday, setIsToday] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const onShowPicker= () => {
        setShowPicker(true);
    }

    const onHandleChange = (event, selectedDate) => {
        setDate(selectedDate);
        setShowPicker(false);
        setShowTime(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task name"
                    placeholderTextColor={colors.gray}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Hour</Text>
                {
                    isAndroid ? (
                        <>
                            {showTime && !showPicker && (
                                <Text style={styles.time}>
                                    {date.toTimeString().split(' ')[0]}
                                </Text>
                            )}
                            <Button 
                                title="Select hour"
                                onPress={onShowPicker}
                                color={colors.primary}
                            />
                            {showPicker && <DateTimePicker
                                value={date}
                                mode='time'
                                is24Hour={true}
                                onChange={onHandleChange}
                                style={{ width: '80%' }}
                            />}
                        </>
                    ) : (
                        <DateTimePicker
                            value={date}
                            mode='time'
                            is24Hour={true}
                            onChange={(event, selectedDate) => setDate(selectedDate)}
                            style={{ width: '80%' }}
                        />
                    )
                }
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Today</Text>
                <Switch 
                    value={isToday}
                    onValueChange={(value) => setIsToday(value)}
                    trackColor={{ false: colors.gray, true: colors.primary }}
                    thumbColor={isToday ? colors.white : colors.primary}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Create;