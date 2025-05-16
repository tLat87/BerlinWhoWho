import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import {TouchableOpacity, Image} from "react-native";
import LocationsScreen from "./src/screens/LocationsScreen";
import HowToPlayScreen from "./src/screens/HowToPlayScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import PlayerSetupScreen from "./src/screens/PlayerSetupScreen";
import RoleRevealScreen from "./src/screens/RoleRevealScreen";
import GameStartScreen from "./src/screens/GameStartScreen";

const Stack = createStackNavigator();

const leftBack = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{marginLeft: 12}}>
            <Image source={require('./src/assets/img/Frame31.png')} />
        </TouchableOpacity>
        )
}

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        // headerStyle: { backgroundColor: '#F5751A', height: 100 },
                        headerShown: false,
                        headerTintColor: 'white',
                        headerLeft: leftBack,
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
