import {  View, SafeAreaView, Platform , StyleSheet} from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { AnimatedAppLoader } from './components/splashscreen/animatedapploader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './pages/authscreen/authscreen';
//import {TabNavigation} from './pages/navigationscreen';
import { StackNavigation } from './pages/navigationscreen';
import OnBoardingScreen from './pages/onboardingscreen/onboardingscreen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as WebBrowser from 'expo-web-browser';





SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

const stack = createNativeStackNavigator()

export default function App() {

  WebBrowser.maybeCompleteAuthSession();

  


  /*
  useEffect(() => {
    fetch("http://192.168.43.149:8000/foods/")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
  */

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AnimatedAppLoader>
            <NavigationContainer>
              <stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}       
                  >
                
                <stack.Screen name="index" component={AuthScreen} />
              </stack.Navigator>
            </NavigationContainer>
        </AnimatedAppLoader>
      </Provider>
    </View>
  );
}




 
const styles =  StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


/*
  <stack.Screen name="onboarding" component={OnBoardingScreen} />
*/