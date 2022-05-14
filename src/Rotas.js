import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';


import * as EstilosGlobais from '../estilos';

const Tab = createBottomTabNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: EstilosGlobais.cores.roxo,
                    activeBackgroundColor: EstilosGlobais.cores.roxo,
                    inactiveTintColor: EstilosGlobais.cores.claro,
                    inactiveBackgroundColor: EstilosGlobais.cores.laranja,
                    style: {
                        height: 70
                    },
                    labelStyle: {
                        width: '100%',
                        marginTop: 3,
                        paddingTop: 21,
                        fontSize: 16,
                        fontWeight: 'bold',
                        lineHeight: 21,
                        flex: 1,
                        backgroundColor: EstilosGlobais.cores.laranja,
                    },
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="Serviços" component={Servicos} />
                <Tab.Screen name="Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Rotas;
