import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarraPesquisa from './BarraPesquisa';
import { createStackNavigator } from '@react-navigation/stack';

import Icones from './Icones';
import Onibus from './Onibus';
import Feedback from './Feedback';
import COP30 from './COP30';

const Stack = createStackNavigator();

export default function App() {
    return (

            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Header}
                options={{headerShown: false}}
                />

                <Stack.Screen 
                name="Onibus" 
                component={Onibus}
                
                />

                <Stack.Screen
                 name="Feedback"
                component={Feedback}
                
                  />

                <Stack.Screen 
                name="COP30"
                component={COP30} 
                
                />
            </Stack.Navigator>

    );
}

function Header(){
    return(
        
        <View style ={style.fundo}>
            <View style = {style.containerBack}>  
                <View style = {style.container}>  
                    <BarraPesquisa/>
                    </View>
                <Icones/> 
                </View>
            </View>   
             
    );
}





        


const style = StyleSheet.create({
    fundo:{
        backgroundColor:'#E6F0FF',
        flex:1
    },
    
    container:{
        backgroundColor: '#005EEB',
        alignItems: 'center',
        paddingTop: 30 ,
        paddingVertical:9,
        height: 100,
        justifyContent: 'flex-start',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    containerBack:{
        backgroundColor: '#4891FF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})
