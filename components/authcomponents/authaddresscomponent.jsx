
import { View, TextInput, Text, StyleSheet } from "react-native"
import { useState } from "react"
import { CloseSvg, LocationSvg, ConfirmMarkSvg, ArrowDownSvg } from "../svgicons/svgicons"
import themeStyle from "../../styles/theme.style"

export const AuthAddressComponent = ({ value, addressText, locationText , placeholder, select, marginBottom}) => {

    

    return(
        <View style={[styles.address, 
            marginBottom, 
            addressText ? { 
                borderWidth: 0,
                paddingVertical: 14
            } : {
                borderWidth:1,
                borderColor: themeStyle.LIGHTGREY,
            }
            ]}>
                <View style={styles.location}>
                    <LocationSvg />
                </View>
                { placeholder && <TextInput 
                    placeholder={placeholder}
                    placeholderTextColor={themeStyle.GRAY_2}
                    style={[
                        styles.textinput,
                    ]}
                /> }
                { ( addressText, locationText ) && 
                <View style={{ flex : 1 }}>
                    <Text style={{ 
                        fontFamily: themeStyle.Manrope_500Medium,
                        fontSize: themeStyle.FONT_14,
                        lineHeight: themeStyle.LINEHEIGHT,
                        color:themeStyle.GRAY,
                        marginBottom: 2
                     }}>{addressText}</Text>
                    <Text
                        style={{ 
                            fontFamily: themeStyle.MANROPE_REGULAR,
                            fontSize: 12,
                            lineHeight: 16,
                            color:themeStyle.GRAY_2
                         }}
                    >{locationText}</Text>
                </View>  }
                <View style={styles.iconRight}>
                    { ( value && placeholder ) && <CloseSvg /> }
                    { (!value && placeholder ) && <ArrowDownSvg /> }
                    { select && <ConfirmMarkSvg /> }
                </View>
                
        </View>
    )
}



const styles = StyleSheet.create({
    textinput: {
        paddingVertical: 19,
        fontSize: themeStyle.FONT_14,
        lineHeight: themeStyle.LINEHEIGHT,
        fontFamily: themeStyle.Manrope_500Medium,
        flex: 1

    },
    address:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderRadius: 24,
    },
    location: {
        paddingLeft: 21,
        paddingRight: 19
    },
    iconRight: {
        paddingHorizontal: 23
    },

})