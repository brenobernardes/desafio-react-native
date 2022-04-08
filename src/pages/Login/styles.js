import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    password: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#fff',
        fontSize: 18
    }
})