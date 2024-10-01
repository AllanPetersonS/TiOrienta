import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import{Ionicons} from 'react-native-vector-icons';

export default function SingUp(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Ionicons
                onPress={() => navigation.navigate('SingIn')}
                name="chevron-back"
                size={40}
                color="#FFF"

            >
            </Ionicons>


            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <View style={styles.containerForms}>

                <Animatable.View style={styles.content} animation="fadeInLeft">    
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite sua email..."
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                    />

                    <Text style={styles.title}>Confirme sua senha</Text>
                    <TextInput
                        placeholder="Confirme sua senha..."
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    content:{
        margin: 0,
        padding: 0
    },  

    container:{
        flex: 1,
        backgroundColor: '#005EEB', 
    },
    containerHeader:{
        marginTop: '6%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#fff' 
    },
    containerForms:{
        backgroundColor: "#FFF",
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: "#005EEB",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight:'bold'
    },
    


})