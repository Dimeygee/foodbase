import React, { useEffect, useState, forwardRef } from "react";
import { TextInput,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import themeStyle from "../../../styles/theme.style";

const OtpInput = forwardRef((props, ref) => {
    const { index, value, Change } = props
    const handleChange = ({ nativeEvent }) => Change(index, nativeEvent );

    const [focus, isFocus] = useState(false);

    function classname() {
        if (value) {
        return {
            backgroundColor: themeStyle.MAIN_COLOR_1,
        };
        }
        return {
            backgroundColor: "#F9FAFB",
        };
    }

    const handleFocus = () => isFocus(true);
    const handleBlur = () => isFocus(false);

    const inputClass = focus ? {
        backgroundColor: "rgba(255, 122, 40, 0.1)",
        borderColor: "#FF7A28",
        borderWidth: 1
    } : classname();

    return (
        <TextInput
            keyboardType="numeric"
            style={[inputClass,{
                borderRadius: 24,
                width: 68,
                height:68,
                lineHeight: 34,
                textAlign: "center",
                fontWeight: themeStyle.FONTWEIGHT_700,
                fontFamily: themeStyle.MANROPE_BOLD,
                color: themeStyle.MAIN_WHITE,
                fontSize: 24
            }]}
            value={value}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleChange(e)}
            //className={`cell ${inputClass}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
        />
    );
});


const styles = StyleSheet.create({
    
})

export default OtpInput;
