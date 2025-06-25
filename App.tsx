import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LocationsScreen from "./src/screens/LocationsScreen";
import HowToPlayScreen from "./src/screens/HowToPlayScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import PlayerSetupScreen from "./src/screens/PlayerSetupScreen";
import RoleRevealScreen from "./src/screens/RoleRevealScreen";
import GameStartScreen from "./src/screens/GameStartScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                        headerTintColor: 'white',
                        headerShadowVisible: false,
                    }}>

                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
                        <Stack.Screen name="LocationsScreen" component={LocationsScreen} options={{headerLeft: ()=>{}}} />
                        <Stack.Screen name="HowToPlayScreen" component={HowToPlayScreen} options={{headerLeft: ()=>{}}} />
                        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerLeft: ()=>{}}} />
                        <Stack.Screen name="PlayerSetupScreen" component={PlayerSetupScreen} options={{headerLeft: ()=>{}}} />
                        <Stack.Screen name="RoleRevealScreen" component={RoleRevealScreen} />
                        <Stack.Screen name="GameStartScreen" component={GameStartScreen} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
