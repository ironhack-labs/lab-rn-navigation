import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../theme/HomeScreen.style";

const HomeScreen = () => {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile');
    };

    const goToTeamMembers = () => {
        navigation.navigate('TeamMembers');
    };

    return <View>
        <TouchableOpacity style={styles.button} onPress={() => goToProfile()}><Text style={styles.text}>Go to profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => goToTeamMembers()}><Text style={styles.text}>Go to team</Text></TouchableOpacity>
    </View>
}

export default HomeScreen;