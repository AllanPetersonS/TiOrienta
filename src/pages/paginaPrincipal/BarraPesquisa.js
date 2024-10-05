import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Certifique-se de importar corretamente
import { useState } from 'react';
import axios from 'axios';

function BarraPesquisa({ setDestino }) {
  const [text, setText] = useState("");
  const apiKey = 'AIzaSyBueXL8uHxfmt_X991-3c7hxhChCIgu30Q';

  const solicitar = async (text) => {
    Keyboard.dismiss();

    try {
      const resultados = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: text,
          key: apiKey
        }
      });

      console.log('Resultados da API:', resultados.data);

      if (resultados.data.results.length > 0) {
        const location = resultados.data.results[0].geometry.location;
        setDestino({
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
          onChangeText={(value) => setText(value)}
          onSubmitEditing={() => { solicitar(text) }}
        /> 

        <Ionicons
          name='search'
          size={40}
          color='white'
          onPress={() => { solicitar(text) }}
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
