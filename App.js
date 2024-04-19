import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
export default function App() {
 
  return (
    <View style={styles.root}>
      <Text style={styles.question}>Which one is a cup of tea?</Text>    
      <View style={styles.optionsContainer}>
      <ImageOption />
      <ImageOption />
      <ImageOption />
      <ImageOption />
       
      </View>  
     
    </View>
  );
}


