import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    image:{
        flex: 1,
        height: 100,
        width: 100,
    },
   
    optionContainer:{
        // padding: 10,
        width: '48%',
        height: '48%',
        borderColor: 'lightgray',
        borderWidth: 2,
        // backgroundColor: 'red',
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',    
        paddingVertical: 10,
        borderBottomWidth: 4,

        
    },
   
    question:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    isSelected:{
        borderColor: 'green',
        borderWidth: 2,
    }
});

export default styles;