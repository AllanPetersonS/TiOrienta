import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Certifique-se de importar corretamente
import { useState } from 'react';
import axios from 'axios';


function BarraPesquisa({ setDestino }) {
  const [text, setText] = useState("");
  const apiKey = 'AIzaSyBueXL8uHxfmt_X991-3c7hxhChCIgu30Q';

  console.log('Endereço solicitado:', text);

  const solicitar = async () => {
    Keyboard.dismiss();
    
    if (!text.trim()) {
      Alert.alert('Por favor, insira um endereço válido.')
      return;
  }
  
  
    
    try {
      const resultados = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: text,
          key: apiKey
        }
      });

      console.log('Resultados da API:', resultados.data); 

      if (resultados.data.results && resultados.data.results.length > 0) {
        console.log('Primeiro resultado:', resultados.data.results[0]); 
        const location = resultados.data.results[0].geometry.location;
        console.log("Resultados:", resultados.data)
        console.log('Coordenadas do Destino:', {
          latitude: location.lat,
          longitude: location.lng,
        });

        setDestino({
          latitude: location.lat,
          longitude: location.lng,
        });
        
        const handleSearch = async (address) => {
          const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json');
          const data = await response.json();
      
          if (data.status === "OK" && data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
              setDestino({ latitude: lat, longitude: lng });
              console.log("Destino atualizado no BarraPesquisa:", { latitude: lat, longitude: lng }); // Certifique-se de que isso aparece no log
          }
      };

        console.log('Destino atualizado no BarraPesquisa:', {
          latitude: location.lat,
          longitude: location.lng,
      });
        
      } else {
        console.log('Nenhum resultado encontrado');
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <SafeAreaView style={style.view}>
      <View style={style.cabecalho}>
        <StatusBar barStyle="light-content" />
        
        <TextInput 
          placeholder='Selecionar Destino'
          style={style.input}
          autoCorrect={false}
          autoCapitalize='none'
          value={text}
          onChangeText={setText}
          onSubmitEditing={solicitar }
        /> 

        <Ionicons
          name='search'
          size={40}
          color='white'
          onPress={ solicitar }
        />
      </View>  
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cabecalho: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 50,
    marginTop: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10
  },
  view: {
    marginTop: StatusBar.currentHeight
  }
});

export default BarraPesquisa;
