import {OnBoardingScreenOne} from "../../components/screen/onboardings/onboarding1"
import { OnBoardingScreenTwo } from "../../components/screen/onboardings/onboarding2";
import {OnBoardingScreenT3} from "../../components/screen/onboardings/onboarding3"
import { View, StyleSheet, Text } from "react-native"


import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function OnBoardingScreen() {

    
    const Stack = createNativeStackNavigator()

    return(
        <View 
            style={styles.container} 
            >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }} 
            >
                <Stack.Screen name="onboardingone" component={OnBoardingScreenOne} />
                <Stack.Screen name="onboardingtwo" component={OnBoardingScreenTwo} />
                <Stack.Screen name="onboardingthree" component={OnBoardingScreenT3} />
            </Stack.Navigator>        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})