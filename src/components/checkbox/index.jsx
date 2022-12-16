import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../constants/themes";

const Checkbox = ({ checked = true, onChange, isToday }) => {
    return isToday ? (
        <TouchableOpacity style={checked ? styles.containerChecked : styles.containerUnchecked} onPress={onChange}>
            {checked ? <Ionicons name='checkmark' size={20} color={colors.white} /> : null}
        </TouchableOpacity>
    ) : (
        <View style={styles.container}/>
    )
}

export default Checkbox;