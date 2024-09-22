import {React} from 'react';
import { StatusBar } from 'react-native';
import Header from './src/pages/paginaPrincipal/Header';
import BarraPesquisa from './src/pages/paginaPrincipal/BarraPesquisa';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#39A69D" barStyle='light-content'/>
      <Header/>
      <BarraPesquisa/>
    </NavigationContainer>
  );
}


