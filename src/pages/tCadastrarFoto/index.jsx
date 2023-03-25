import React, { useState } from 'react';

import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import Routes2 from '../../routes2';


export default function tCadastrarFoto() {

    const navigation = useNavigation();
    function Avancao() {
        navigation.navigate('Routes2')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground source={require('../../assets/home-background.png')}
            style={styles.container}
            imageStyle={{ width: 274, height: 368 }}>

            <View style={styles.main}>
                <Text style={styles.title}>Selecione sua melhor foto</Text>
            </View>

            <RectButton style={styles.button} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
            <RectButton style={styles.buttonReturn} onPress={Voltar}>
                <Text style={styles.buttonText}>Voltar</Text>
            </RectButton>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
    },
    
    main: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#322153',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
        marginLeft: 115
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
        textAlign: 'center'
    },

    footer: {},
    select: {},
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    buttonReturn: {
        backgroundColor: '#add8e6',
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    button: {
        backgroundColor: '#ff007f',
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
})