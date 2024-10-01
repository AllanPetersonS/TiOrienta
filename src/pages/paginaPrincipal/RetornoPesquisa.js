import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './Header';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    ScrollView, 
    SafeAreaView,
    Keyboard,
    FlatList } from 'react-native';

const RetornoPesquisa = ({navigation, text, setText, solicitar}) =>{
    return(
        <SafeAreaView>
            <Header/>
            <FlatList
            data={data}
            keyExtractor={(element) =>element.id}
            renderItem={({item}) => {
                return(
                    <Text>ola</Text>
                )
            }}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

})
export default RetornoPesquisa;