import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
Text,
View, 
TextInput, 
ScrollView, 
SafeAreaView,
Keyboard } from 'react-native';
import{Ionicons} from 'react-native-vector-icons/Ionicons';
import Cabecalho from './Cabecalho';
import { useState } from 'react';
import axios from 'axios';

function BarraPesquisa(){
 
 const link = "https://jsonplaceholder.typicode.com/posts"; //colocar aqui o caminho da api
 const [text, setText] = useState("")
 const [loading, setLoading] = useState(false);
 const [data, setData] = useState([])

 const solicitar = async(text) =>{
  Keyboard.dismiss()
  setLoading(true)
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
  }finally{
    setLoading(false);
  }


}
 
  return(
    <SafeAreaView style = {style.view}>
      <StatusBar barStyle = "light-content"/>
      <View style = {style.cabecalho}>
        

        <Cabecalho
        text = {text}
        setText = {setText}
        solicitar = {solicitar}
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