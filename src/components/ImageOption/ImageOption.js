import { View, Text, Image } from'react-native';
import styles from './ImageOption.styles';
const ImageOption = () => {
    return (
      <View style={styles.optionContainer}>
      <Image source={{uri: 'https://e7.pngegg.com/pngimages/406/1017/png-clipart-classical-chinese-tea-cup-chinese-style-tea-cup-thumbnail.png'}}
        style={styles.image} 
        resizeMode='contain'
        />
        <Text style={styles.optionText}>Cup of tea</Text>
      </View> 
    )
  }


  export default ImageOption;