import React, { useState } from 'react';

import { View, Button, Image, ImageBackground, StyleSheet, Text, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function tPesquisa(){
    return(
        <SafeAreaView style={styles.view}>
            <Text>Pagina de pesquisa</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff007f',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
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
    },

    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
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
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    main: {
        flex: 1,
        justifyContent: 'center'
    },

    select: {},

    title: {
        color: '#322153',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
        marginLeft: 115
    },
    
    view : {
        marginTop: StatusBar.currentHeight,
    }
    
    
})