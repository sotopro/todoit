import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.text,
    },
    time: {
        fontSize: 13,
        color: colors.primary,
        fontWeight: 'bold',
    },
    containerCheckbox: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTodo: {
        flex: 0.8,
    },
});