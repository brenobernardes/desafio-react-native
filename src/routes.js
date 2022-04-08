import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/login';
import Menu from './pages/Menu/menu';
import Coletas from './pages/Coletas-disponiveis/coletasDisponiveis';
//import coletasLancamento from './pages/Coletas-Lançamento/coletas-lancamento';

const Stack = createNativeStackNavigator();

export default function Routes () {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Coletas" component={Coletas} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}