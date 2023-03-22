import { useState, useMemo, useEffect } from "react"
import { Animated, View, Text, Alert } from "react-native"
import { SplashScreenComponent } from "./splashscreen"
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_500Medium } from '@expo-google-fonts/manrope';

let customFonts = { 
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_500Medium
}

SplashScreen.preventAutoHideAsync().catch((err) => {
    /* reloading the app might trigger some race conditions, ignore them */
    console.log(err)
  });
  


export function AnimatedAppLoader({ children }){


    return(
        <AnimatedSplashScreen>{children}</AnimatedSplashScreen>
    )
}


export function AnimatedSplashScreen({ children }){


    let [ fontsLoaded ] = useFonts(customFonts)

    const animation = useMemo(() => new Animated.Value(1), [])
    const [isAppReady,setAppReady] = useState(false)
    const [isSplashAnimationComplete, setAnimationComplete] = useState(false)



    async function LoadFonts(){
        try{
            await SplashScreen.hideAsync();

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        async function isReady(){
            if(fontsLoaded){
                setAppReady(true)
                LoadFonts()
            }
        }

        isReady()

    }, [fontsLoaded])

    useEffect(() => {
        if(isAppReady){
            Animated.timing(animation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => setAnimationComplete(true))
        }
    }, [isAppReady])


    return(
        <View style={{ flex: 1 }}>
            {isAppReady && children }
            {!isSplashAnimationComplete && (
                <SplashScreenComponent LoadFonts={LoadFonts} animation={animation}  />
            ) }
        </View>
    )

} 