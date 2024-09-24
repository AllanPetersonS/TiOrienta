import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarraPesquisa from './BarraPesquisa';


function Header(){
    return(
        <View style ={style.fundo}>
            <View style = {style.containerBack}>   
                <View style = {style.container}>  
                    </View>
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
        paddingBottom: 0,
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
export default Header;