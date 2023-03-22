
import { View, StyleSheet, Pressable , LayoutAnimation,Platform, NativeModules} from "react-native"
import themeStyle from "../styles/theme.style"
import { useState } from "react"


export const ToggleSwitch = () =>  {

    const {UIManager} = NativeModules;
   
    const [toggled, toggleSwitch] = useState(false)

    if (Platform.OS === "android") { 
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }


    const handlePress = () => {
        LayoutAnimation.spring()
        toggleSwitch(!toggled)
    }
    
    return(
        <Pressable 
            style={[styles.container, 
            !toggled ? {
                backgroundColor: "#E5E6EB",
                justifyContent: "flex-start"
            } : {
                backgroundColor: themeStyle.MAIN_COLOR_1,
                justifyContent: "flex-end"
            }
            ]}
            onPress={handlePress}
        >
                <View style={[styles.checkcircle,
                !toggled ? {
                    backgroundColor: "#FFFFFF"
                } : {
                    backgroundColor: "#6A320F",
                }
                ]}></View>
        </Pressable>
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: themeStyle.MAIN_COLOR_1,
        padding: 4,
        width: 44,
        borderRadius: 12,
        flexDirection: "row",
    },
    checkcircle: {
        backgroundColor: "#6A320F",
        width: 16,
        height: 16,
        borderRadius: 50,
        /*transform: [
            {translateX: 0}
        ]*/
    }
})