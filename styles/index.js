import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 8,
    },
    btnContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    btn: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 17,
    },
    btnOutline: {
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    btnOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 17,
    },
})

export default styles;