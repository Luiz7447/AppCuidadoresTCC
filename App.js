import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { screensEnabled } from 'react-native-screens';

import AppLoading from 'expo-app-loading';
import React from 'react';
import Routes from './src/routes';
import Routes2 from './src/routes2';
import tLogin from './src/pages/tLogin';
import tPesquisa from './src/pages/tPesquisa';
import tNovaSenha from './src/pages/tNovaSenha';
import tEsquiciSenha from './src/pages/tEsqueciSenha';


export default function App() {
        const [fontsLoaded] = useFonts({
            Roboto_400Regular,
            Roboto_500Medium,
            Ubuntu_700Bold
        });

        if (!fontsLoaded) {
            return <AppLoading/>
        }

        else {
            return (
                <>
                    <StatusBar style="dark" backgroundColor="transparent" translucent />
                    <Routes/>
                </>
            );
        }
}