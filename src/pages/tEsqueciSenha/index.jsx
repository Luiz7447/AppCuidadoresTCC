import React, { useState } from 'react';

import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


export default function tEsquiciSenha() {
    const navigation = useNavigation()

    function Avancao() {
        navigation.navigate('tNovaSenha');
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground source style={styles.container}>
            <View style={styles.main}>
                <Image style={{ width: 207, height: 225, marginTop: 10,
                marginLeft: 60 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View style={styles.main}>

            <Text style={styles.title}>Esqueci minha senha(a)</Text>

            <TextInput/>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                
                <Text style={styles.description}>Ou</Text>

                <TextInput/>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu número de Celular"
                    autoCorrect={false}
                />

                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
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
        marginTop: -100,
        marginLeft: 50,
    },
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
        marginLeft: 150
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
    buttonNext: {
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