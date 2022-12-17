import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    input: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '80%',
        paddingVertical: 5,
    },
    button: {
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 50,
        borderRadius: 11,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    }
});