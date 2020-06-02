import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Beginner from "./screens/Beginner";
import Combine from "./screens/Combine";
import Onboard from "./screens/Onboarding";
import useApp from "./Apphooks";
import { ActivityIndicator, View } from "react-native";

const App = () => {
    const { initialState, isReady, saveState } = useApp();
    const { Screen, Navigator } = createStackNavigator();

    if (!isReady) return <ActivityIndicator size='large' color='black' />;

    return (
        <NavigationContainer initialState={initialState} onStateChange={saveState}>
            <Navigator initialRouteName='beginner'>
                <Screen name='Beginner' component={Beginner} options={{ title: "First Screens" }} />
                <Screen
                    name='Combine'
                    component={Combine}
                    options={{ title: "Combining Animated Value" }}
                />
                <Screen
                    name='Onboard'
                    component={Onboard}
                    options={{ headerShown: false, headerTransparent: true }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
export default App;
