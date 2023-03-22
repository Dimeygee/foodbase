import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from "react-native";
import themeStyle from "../../../styles/theme.style";
import { useEffect, useState } from "react";
import { MapSvg } from "../../../components/svgicons/svgicons";
import { AuthButton } from "../../../components/button";
import { LocationSvg, ArrowDownSvg } from "../../../components/svgicons/svgicons";
import { AuthAddressComponent } from "../../../components/authcomponents/authaddresscomponent";


export default function AuthAddress() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isHidden, showPassword] = useState(true)

  
    return(
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
        <View 
            style={styles.AuthContainer}
            >
            <MapSvg /> 
            <Text style={styles.text1}>{`Share Your Address ${'\n'} with Us to Order`}</Text> 
            <Text
                style={styles.text2}
            >
                {`Please enter your location or allow access ${'\n'} to your location to find food near you.`}
            </Text> 
            <AuthButton text="Use Current Location" width="100%" marginTop={40} marginBottom={24} lineHeight={26} />
            <AuthAddressComponent placeholder="Enter a new address"   />
            <ScrollView style={{ 
                borderWidth:1,
                borderColor: themeStyle.LIGHTGREY ,
                borderRadius: 24,
                marginTop: 16,
                paddingVertical: 10,
                width:"100%"
            }}>
                <AuthAddressComponent 
                    addressText="McDonald's" 
                    locationText="345 Bayshore Blvd, San Francisco"
                    select
                />
                <AuthAddressComponent 
                    addressText="Burger King" 
                    locationText="245 Bayshore Blvd, San Francisco" 
                />
                <AuthAddressComponent 
                    addressText="Burger King" 
                    locationText="245 Bayshore Blvd, San Francisco" 
                />
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    )

}


const styles = StyleSheet.create({
    AuthContainer: {
        paddingTop:60,  
        paddingBottom: 77,
        paddingHorizontal: 24,
        alignItems: "center",
        backgroundColor: themeStyle.MAIN_WHITE,
        flex: 1
    },
    text1: {
        textAlign: themeStyle.CENTER,
        color:themeStyle.GRAY,
        fontFamily: themeStyle.MANROPE_BOLD,
        lineHeight: 34,
        fontSize: themeStyle.FONT_24,
        paddingVertical:24
    },
    text2:{ 
        textAlign: themeStyle.CENTER,
        color: themeStyle.GRAY_2,
        fontFamily: themeStyle.MANROPE_REGULAR,
        fontSize: themeStyle.FONT_14,
        lineHeight: 24 
    },
    textinput: {
        paddingVertical: 19,
        fontSize: themeStyle.FONT_14,
        lineHeight: themeStyle.LINEHEIGHT,
        fontFamily: themeStyle.Manrope_500Medium,
        flex: 1

    }

})