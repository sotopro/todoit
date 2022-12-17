import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Create } from "../screens";
 

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
                <Stack.Screen name="Create" component={Create} options={{
                    presentation: 'modal',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;