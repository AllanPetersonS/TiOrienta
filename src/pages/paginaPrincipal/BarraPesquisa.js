import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
Text,
View, 
TextInput, 
ScrollView, 
SafeAreaView,
Keyboard } from 'react-native';
import{Ionicons} from 'react-native-vector-icons';


import { useState } from 'react';
import axios from 'axios';


function BarraPesquisa(){
 
 
 const link = "https://jsonplaceholder.typicode.com/posts"; //colocar aqui o caminho da api
 const [text, setText] = useState("")

 const [data, setData] = useState([])

 const solicitar = async(text) =>{
  Keyboard.dismiss()
  
  try{
    const resultados = await axios.get(link,{
      params:{
        id: text
      }
    }) 
    console.log(resultados.data)
    setData(resultados.data)
  } catch (err) {
    console.log(err)
  }


}
 
  return(
    <SafeAreaView style = {style.view}>
      <View style = {style.cabecalho}>
        <Ionicons

        
        />
        <StatusBar barStyle = "light-content"/>
        <TextInput placeholder='Selecionar Destino'
        style = {style.input}
        autoCorrect = {false}
        autoCapitalize ='none'
        value = {text}
        onChangeText ={(value) => setText(value)}
        onSubmitEditing={() => {solicitar(text)}}
        /> 

       
        <Ionicons
          name = 'search'
          size = {40}
          color = 'white'
          onPress = {() => {solicitar(text)}}
        />
      </View>  
    </SafeAreaView>
)}
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
  },
  view:{
    marginTop: StatusBar.currentHeight
  }
  
})
  



export default BarraPesquisa; 