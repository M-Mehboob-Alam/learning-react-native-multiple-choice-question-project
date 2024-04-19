import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        paddingTop: 20,
    },
    image:{
        flex: 1,
        height: 100,
        width: 100,
    },
    optionsContainer:{
       
        width: '100%',
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
       alignContent: 'space-around'
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
});

export default styles;