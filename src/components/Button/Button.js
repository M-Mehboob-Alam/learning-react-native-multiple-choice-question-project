import React from 'react'
import { Pressable, Text, View } from 'react-native'
import PropTypes from 'prop-types' // ES6
import styles from './styles'
const Button = ({onPress, text, disabled}) => {
  const buttonHandler = () => {
    console.warn('buttonHandler called')
  }
  return (
    <Pressable disabled={disabled} onPress={onPress} style={[styles.button, disabled ? styles.disabled : {}]}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.prototypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}
Button.defautProps = {
  text: 'Default no text found',
  onPress: () => {},
  disabled: false
}


export default Button