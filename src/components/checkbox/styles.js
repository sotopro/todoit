import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    containerChecked: {
        width: 20,
        height: 20,
        margin: 13,
        borderRadius: 6,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
    },
    containerUnchecked: {
        width: 20,
        height: 20,
        margin: 13,
        borderRadius: 6,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
    },
    container: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
        margin: 13,
    }
});