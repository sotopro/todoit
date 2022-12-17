import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        fontVariant: ['small-caps'],
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 12,
    },
    listTitle: {
        color: colors.text,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listContainer: {
        marginHorizontal: 20,
    },
    subTitle: {
        color: colors.text,
        fontSize: 14,
    },
    headerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 45,
        height: 45,
        borderRadius: 21,
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 60,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    }
});