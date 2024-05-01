import { View, Text, Image, Pressable } from'react-native';
import styles from './ImageOption.styles';
import PropTypes from 'prop-types'; // ES6
const ImageOption = ({image, text, isSelected, selectedOption, id, setSelectedOption}) => {
    return (
      <Pressable onPress={()=> setSelectedOption(id)} style={[styles.optionContainer ,isSelected && styles.isSelected]}>
      <Image source={{uri: image}}
        style={styles.image} 
        resizeMode='contain'
        />
        <Text style={styles.optionText}>{text}</Text>

      </Pressable> 
    )
  }

ImageOption.propTypes ={
  image: PropTypes.string,
  text: PropTypes.string,
  isSelected: PropTypes.bool
};
ImageOption.defaultProps = {
  image: 'https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  text:'Default  no text found',
  isSelected: false
}
  export default ImageOption;