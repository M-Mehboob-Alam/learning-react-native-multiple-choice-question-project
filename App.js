import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import data from './imageMultipleChoiceQuestions';
import Button from './src/components/Button';



export default function App() {

 const [selectedOption, setSelectedOption] = useState(false);

 const pressHandler = () =>{
      console.warn('button is pressing');
 }
  return (
    <View style={styles.root}>
      {
        data.map((question, key) => (
          <View style={styles.questionContainer} key={key}>
          <Text style={styles.question}>{question.question}</Text> 
             
          <View style={styles.optionsContainer}>
            {
              question.options.map((option, key) => (
                <ImageOption 
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption} 
                id={option.id}
                key={key}
                image={option.image}
                text={option.text}
                isSelected={option.id === selectedOption}
                />
              ))
            }
            {/* <ImageOption image='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' text='camera' />
            <ImageOption image='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' text='camera' />
            <ImageOption image='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' text='camera' />
            <ImageOption image='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' text='camera' /> */}
          <Button text='CHECK' onPress={pressHandler} disabled={selectedOption ? false: true} />
          </View>  
          
        </View>
        ))
      }
     
    </View>
  );
}


