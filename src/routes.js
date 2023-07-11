import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator(); //Cria um StackNavigator
import TelaInicial from './pages/TelaInicial';
import SelecaoModulos from './pages/SelecaoModulos';
import LetrasFichas from './pages/LetrasFichas';
import LetrasExemplos from './pages/LetrasExemplos';
import AvaliacaoModulos from './pages/AvaliacaoModulos';
import SilabasFichas from './pages/SilabasFichas';
import SilabasExemplos from './pages/SilabasExemplos';
import FrasesFichas from './pages/FrasesFichas';
import FrasesExemplos from './pages/FrasesExemplos';
import HistoriasFichas from './pages/HistoriasFichas';
import HistoriasExemplos from './pages/HistoriasExemplos';

export default function Rotas() { //Exporta para que possa ser "visto" no resto do aplicativo
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>

                <AppStack.Screen        name="TelaInicial"             component={TelaInicial} />
                <AppStack.Screen        name="SelecaoModulos"          component={SelecaoModulos} />
                <AppStack.Screen        name="LetrasFichas"            component={LetrasFichas} />
                <AppStack.Screen        name="LetrasExemplos"          component={LetrasExemplos} />
                <AppStack.Screen        name="SilabasFichas"           component={SilabasFichas} />
                <AppStack.Screen        name="SilabasExemplos"         component={SilabasExemplos} />                
                <AppStack.Screen        name="FrasesFichas"            component={FrasesFichas} />
                <AppStack.Screen        name="FrasesExemplos"          component={FrasesExemplos} />   
                <AppStack.Screen        name="HistoriasFichas"         component={HistoriasFichas} />
                <AppStack.Screen        name="HistoriasExemplos"       component={HistoriasExemplos} />                   
                <AppStack.Screen        name="AvaliacaoModulos"        component={AvaliacaoModulos} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}