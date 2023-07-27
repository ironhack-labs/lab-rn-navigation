import { Text, View } from "react-native"
import UserCard from "../components/UserCard";

const ProfileScreen = () => {
    return (<View><UserCard name={"Eric"} lastName={"Mora"} email={"eric@mail.com"} phone={"123123"} avatar={require('../../images/chems.jpeg')} /></View>)
}
export default ProfileScreen;