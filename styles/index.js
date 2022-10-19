import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
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
    rnholeView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
})

export default styles;