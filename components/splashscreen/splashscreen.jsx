import { View, Animated, Alert, StyleSheet } from "react-native"
import styles from "./theme/styles"
import { SvgLogoComponent, SvgSplashScreenComponent } from "../svgicons/svgicons"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen";




export const SplashScreenComponent = ({LoadFonts,  animation }) => {


    return(
        <Animated.View 
            style={[styles.container, StyleSheet.absoluteFill, { opacity: animation }]}>
            <View 
                //onLayout={LoadFonts}
                style={{ 
                    borderColor:"white",
                    width:"100%",
                    alignItems: "center",
                    paddingTop:238
                }}
            >
                <SvgLogoComponent />
                <View style={styles.splashscreenBG}>
                    <SvgSplashScreenComponent />
                </View>
            </View>
        </Animated.View>
    )


}