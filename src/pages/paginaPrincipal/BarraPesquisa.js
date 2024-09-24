import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import{Ionicons} from 'react-native-vector-icons';


import { useState } from 'react';
import axios from 'axios';


function BarraPesquisa(){
 const [searcWord, setSearchWord] = useState('')
 const escolha = route.params.escolha;
 const link = `api.giphy.com/v1${escolha}/search`;//colocar aqui o caminho da api
 const [text, setText] = useState("")

 const [data, setData] = useState([])

 const solicitar = async() =>{
  Keyboard.dismiss()
  
  try{
    const resultados = axios.get 
  } catch (e) {

  }


}
 
  return(
    <SafeAreaView style = {style.view}>
      <View style = {style.cabecalho}>
        <Ionicons
        name = 'chevron-back'
        size = {40}
        color = 'white'
        onPress = {() => {}}
        
        />
        <StatusBar barStyle = "light-content"/>
        <TextInput placeholder='Selecionar Destino' style = {style.input}
        onChangeText={setSearchWord}
        autoCorrect = {false}
        />

       
        <Ionicons
          name = 'search'
          size = {40}
          color = 'white'
          onPress = {() => {}}
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
    
  },
  view:{
    marginTop: StatusBar.currentHeight
  }
  
})
  



export default BarraPesquisa; 