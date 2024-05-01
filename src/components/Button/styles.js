import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
   backgroundColor: "green",
   width: '90%',
   paddingVertical: 10,
   alignItems: 'center',
   borderRadius: 10,
   marginVertical: 10,
  },
  text:{
    color: "white",
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  disabled:{
    backgroundColor: "gray",
  }

});

export default styles;