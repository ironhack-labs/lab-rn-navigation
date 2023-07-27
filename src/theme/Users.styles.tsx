import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  componentScreen: {
    flex: 1,
    padding: 10
  },
  goBackButton: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    width: '30%',
    marginTop: 10,
    marginLeft: 10
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#3B3B3B',
    borderRadius: 20,
    marginTop: 10,
    padding: 10
  },
  photoUser: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  details: {
    backgroundColor: '#807F80',
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20
  },
  jobPosition: {
    marginTop: 20
  },
  infoPerson: {
    color: '#fff'
  },
  buttonNavigator:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 20,
  },
  innerButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',  
  }
})