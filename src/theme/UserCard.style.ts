import { StyleSheet } from "react-native";

export const UserCardStyles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        elevation: 3,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: .1
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between'
    }
})