import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 16,
        backgroundColor: '#000',
        height: 150
    },
    avatar:{
        borderRadius: 80,
        padding: 20,
        height: 130,
        width: 130,
        marginHorizontal: 10,
        marginVertical: 10
    },
    userData:{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        borderRadius: 16,
        backgroundColor: 'gray',
        marginHorizontal: 10,
        marginVertical: 10,
        height: 130
    },
    name:{
        color: '#fff',
        fontSize: 20,
    },
    email:{
        color: '#fff',
        fontSize: 15,
    },
    phone:{
        color: '#fff',
        fontSize: 12,
        marginTop: 10
    }
})