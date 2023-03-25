import React, { useState } from 'react';

import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

// importa icones
// import { Feather as Icon } from '@expo/vector-icons';

import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


export default function tCadastrarInfo() {

    const navigation = useNavigation();

    function Avancao() {
        navigation.navigate('tCadastrarFoto')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.marginTop}>
                <Image style={{ width: 100, height: 109, marginTop: -30 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View>
                <Text style={styles.title}>Sejam Bem-vindo(a)</Text>
            </View>

            <ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de Nascimento"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Celular"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                    />
                </View>
            </ScrollView>

            <View>
                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
        </ImageBackground >
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
        marginTop: -50,
        marginLeft: 140
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
    footer: {
        marginTop: 43
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

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
})

