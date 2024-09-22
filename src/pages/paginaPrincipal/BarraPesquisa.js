import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import{Ionicons} from 'react-native-vector-icons';
import MOCK_DATA from './MOCK_DATA.json';
import { useState } from 'react';


function BarraPesquisa(){
 const [searcWord, setSearchWord] = useState('')
 
 
  return(
    <SafeAreaView>
      <View style = {style.cabecalho}>
        <Ionicons
        name = 'chevron-back'
        size = {40}
        color = 'white'
        onPress = {() => {}}
        
        />
        <StatusBar barStyle = "light-content"/>
        <TextInput placeholder='Selecionar Destino'
        onChangeText={setSearchWord}
        autoCorrect = {false}
        />

        <ScrollView>
        {MOCK_DATA.filter((val) => {
          if(searcWord === ""){
            return val
          }
          else if(val.first_name.toLowerCase.includes(searcWord.toLowerCase())){
            return val
          }
          
        }).map((item, index) => (
            <Text key={index}>{item.first_name} </Text>
        ))}
        </ScrollView>
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
    marginTop: StatusBar.currentHeight,
    marginBottom:100,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20
  }
})
  



export default BarraPesquisa; 