import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import styles from './App.styles';
export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.question}>Which one is a cup of tea?</Text>    
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup-thumbnail.png'}}
          style={styles.image} 
          resizeMode='contain'
          />
          <Text style={styles.optionText}>Cup of tea</Text>
        </View>  
        <View style={styles.optionContainer}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup-thumbnail.png'}}
          style={styles.image} 
          resizeMode='contain'
          />
          <Text style={styles.optionText}>Cup of tea</Text>
        </View>  
        <View style={styles.optionContainer}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup-thumbnail.png'}}
          style={styles.image} 
          resizeMode='contain'
          />
          <Text style={styles.optionText}>Cup of tea</Text>
        </View>  
        <View style={styles.optionContainer}>
        <Image source={{uri: 'https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup-thumbnail.png'}}
          style={styles.image} 
          resizeMode='contain'
          />
          <Text style={styles.optionText}>Cup of tea</Text>
        </View>  
      </View>  
     
    </View>
  );
}


