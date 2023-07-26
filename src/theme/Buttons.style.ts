import { StyleSheet } from "react-native";

export const ButtonStyle = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#188dec',
        width: 150,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 5,
        marginVertical: 5,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowOpacity: .1
    },
    text: {
        color: 'white'
    }
})