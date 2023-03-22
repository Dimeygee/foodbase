import { Text, StyleSheet, View, Pressable} from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native';
import themeStyle from "../styles/theme.style";
import { useEffect } from "react";





export const Button = ({handleScreenChange, handlePress, index,  backgroundColor,name, paddingVertical, color, fontFamily, fontSize, state , value, isButtonDisabled }) => {

    //const navigation = useNavigation()

    const ButtonDisabled = (state && (value && true) ) || isButtonDisabled

   
    return(
        <Pressable
            onPress={() => handlePress()}
            android_ripple={{
                color:"#fff",
                borderless: false
            }}
            style={[
                styles.btncontainer, (ButtonDisabled && backgroundColor) && {
                    opacity: 0.6
                },
                {
                    
                    backgroundColor ,
                    paddingVertical,
                }
            ]}
            disabled={isButtonDisabled}
        >
            <Text style={{
                color, 
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight:26,
                textAlign:"center",
            }}>{name}</Text>
        </Pressable>
    )

}


export const OnBoardingButton = ({ index , backgroundColor,name,switchScreen,  paddingVertical, color, fontFamily, fontSize, state , value, isButtonDisabled}) => {


    const handlePress = () => {
        switchScreen(index + 1)
    }

    return(
        <Pressable
            onPress={handlePress}
            android_ripple={{
                color:"#fff",
                borderless: false
            }}
            style={[
                styles.btncontainer, 
                {
                    
                    backgroundColor ,
                    paddingVertical,
                }
            ]}
            disabled={isButtonDisabled}
        >
            <Text style={{
                color, 
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight:26,
                textAlign:"center",
            }}>{name}</Text>
        </Pressable>
    )

}


export const AuthButton = ({request, promptAsync, social, text , marginTop, marginBottom, width, lineHeight, color }) => {
    
    
    const handlePress = () => promptAsync();

    
    return(
        <Pressable
            onPress={handlePress}
            disabled={!request}
            style={[styles.socialContainer,
                {
                marginTop,
                marginBottom,
                width:width,
                lineHeight
            }]}
        >
            <View style={{ marginRight: 8 }}>{social}</View>
            <Text style={[
                styles.socialText,
                {
                    color: color ? themeStyle.GRAY : "#FF7A28"
                }
            ]}>
                {text}
            </Text>
        </Pressable>
    )
} 



export const OtpButton = ({ value, name, backgroundColor, fontSize, color, paddingVertical ,fontFamily }) => {

    const isDisabled = !(value.length >= 4)

    console.log(isDisabled, value)
   
    return(
        <Pressable
            onPress={() => handlePress()}
            android_ripple={{
                color:"#fff",
                borderless: false
            }}
            style={[
                styles.btncontainer, (isDisabled && backgroundColor) && {
                    opacity: 0.6
                },
                {
                    
                    backgroundColor ,
                    paddingVertical,
                }
            ]}
            disabled={isDisabled}
        >
            <Text style={{
                color, 
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight:26,
                textAlign:"center",
            }}>{name}</Text>
        </Pressable>
    )

}



const styles = StyleSheet.create({
    btncontainer: {
        borderRadius:24,
        width:"100%",
    },
    socialContainer: {
        paddingVertical:19,
        borderColor:"#F4F4F6",
        borderWidth:1,
        borderRadius:24,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"center"
    },
    socialText:{
        fontFamily: themeStyle.MANROPE_BOLD,
        fontSize: 16,
    }
})




export const RadioButton = () => {
    return(
        <Pressable>

        </Pressable>
    )
}


