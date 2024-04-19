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
 
    optionsContainer:{
       
        width: '100%',
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'space-around',
       alignContent: 'space-around'
    },
    
});

export default styles;