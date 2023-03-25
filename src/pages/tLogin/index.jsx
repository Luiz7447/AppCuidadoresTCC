import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, SafeAreaView, Linking, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import tEsquiciSenha from '../tEsqueciSenha';
import tSelecaoUsuario from '../tSelecaoUsuario';
import tPesquisa from '../tPesquisa';
import Routes2 from '../../routes2';

export default function tLogin() {

    const navigation = useNavigation()

    function Avancao() {
        navigation.navigate('Routes2')
    }
    function Esqueci() {
        navigation.navigate('tEsqueciSenha');
    }
    function Criar() {
        navigation.navigate('tSelecaoUsuario');
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.main}>
                <Image style={{ width: 207, height: 225, marginTop: 200,
                marginLeft: 60 }}
                    source={require('../../assets/logo.png')} />

            </View>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    autoCorrect={false}
                />

                <RectButton style={styles.button} onPress={Avancao}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>

            <View style={styles.main}>
                <Text style={styles.title}>Esqueci sua senha?
                <TouchableOpacity onPress={Esqueci}>
                        <Text style={styles.hyperlinkStyle}>Clique aqui</Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.title}>Não possui uma conta?
                    <RectButton onPress={Criar}>
                        <Text style={styles.hyperlinkStyle}>Clique aqui</Text>
                    </RectButton>
                </Text>
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
        fontSize: 15,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 360,
        marginTop: 25,
        textAlign: 'center'
    },
    description: {
        color: '#6C6C80',
        fontSize: 30,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
        textAlign: 'center'
    },
    footer: {
        marginTop: 200
    },
    select: {},
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
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

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    hyperlinkStyle: {
        color: 'blue',
    }
})