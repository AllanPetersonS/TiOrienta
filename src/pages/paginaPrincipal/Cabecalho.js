import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import{Ionicons} from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const Cabecalho = ({TextInput, setText, solicitar, text}) => {
    return(
    <View style = {style.cabecalho}>
        <StatusBar barStyle = "light-content"/>
        <TextInput placeholder='Selecionar Destino'
        style = {style.input}
        autoCorrect = {false}
        autoCapitalize ='none'
        value = {text}
        onChangeText ={(value) => setText(value)}
        onSubmitEditing={() => {solicitar(text)}}>

        </TextInput>

       
        <Ionicons
          name = 'search'
          size = {40}
          color = 'white'
          onPress = {() => {solicitar(text)}}
        />
    </View>
    )


}
const style = StyleSheet.create({

    cabecalho:{
      
      marginBottom:10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxHeight:50,
      marginTop:20,
      width:'100%',
    },
    input:{
      flex:1,
      backgroundColor: 'white',
      borderRadius: 20,
      fontSize:18,
      paddingLeft:10,
      paddingRight:10,
      marginLeft:10
    }
})
export default Cabecalho;