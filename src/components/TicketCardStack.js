import React, { createElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import Menu from "./Menu";
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const TicketCardStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen 
                name="Tickets y Tarjetas"
                component={Login}
            />

            <Stack.Screen
                name="Menu" 
                component={Menu}
                options={{
                    title: "Menu principal",
                    headerLeft: null
                }}
            />
        </Stack.Navigator>
    );
}

export default TicketCardStack;