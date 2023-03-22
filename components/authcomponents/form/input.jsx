
import { TextInput, View, StyleSheet, Text } from "react-native"
import themeStyle from "../../../styles/theme.style"
import { useEffect, useState } from "react"
import { EyeSvg } from "../authsvgs/authsvgs"
//import PhoneInput from "react-native-phone-number-input";
import { findFlag } from 'country-list-with-dial-code-and-flag'
import { CountriesList } from "./countrieslist";





export const FormInput = ({ type,  password, icon, placeholder, marginTop, secureTextEntry, paddingLeft, value , name, setValue, reset}) => {


    const [ focused, setFocused ] = useState(false)
    const [ blur, setBlur ] = useState(true)
    const [ isHidden, showPassword ] = useState(() => {
        return password && true
    })

    const handleFocus = () => {
        setFocused(true)
        setBlur(false)
    }

    const handleBlur = () => {
        setFocused(false)
        setBlur(true)
    }

    const BLUR_WITHVALUE = (blur && value) && true

    return(
        <View style={[!focused ? styles.onBlur : styles.onFocus, 
            styles.formContainer, {
                marginTop,
                paddingLeft,
            }
        ]}>
            <FocusedWithValueOrNoValue focused={focused} name={name} />
            <BlurWithValue BLUR_WITHVALUE={BLUR_WITHVALUE} name={name} />
            <View style={{ paddingHorizontal: 18 }}>{ icon }</View>
            <TextInput
                    keyboardType={type === "number" ? "number-pad" : "default"}
                    placeholderTextColor="#6C727F"
                    placeholder={placeholder}
                    style={{ 
                        fontSize : themeStyle.FONT_14, 
                        flex: 1,
                        paddingVertical: 22,
                    }}
                    secureTextEntry={isHidden}
                    value={value}
                    onChangeText={text => setValue(text)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            { (((secureTextEntry && value) || (password && value))) && 
                <View style={{ 
                    flexDirection: "row" ,
                    position:"absolute",
                    right:18,
                }}>
                    {!reset && <Text 
                        style={{ 
                            marginRight: 18, 
                            color:themeStyle.MAIN_COLOR_1,
                            fontFamily: themeStyle.MANROPE_BOLD,
                        }}>Forgot?</Text>}
                    <Text 
                        onPress={() => showPassword(!isHidden)}
                        style={{ 
                            marginTop: 2 ,
                        }}>
                        <EyeSvg />
                    </Text>
                </View> 
            }
            
        </View>
        
    )
}




export const FormPhoneInput = ({ icon, placeholder, marginTop, paddingLeft, value , name, setValue}) => {

    //const [ countries ] = useState(() => getList())
    //const [ countryCode, SetCountryCode ] = useState()
    const [ countryDialcode, setCountryDialcode ] = useState("234")
    const [ countryFlag, setCountryFlag ] = useState(() => findFlag("NG"))

    //console.log(countryFlag, countryDialcode)

    const [ cancelling, isCanlleling ] = useState(false)

    const [ count, setCount ] = useState()

    const [ focused, setFocused ] = useState(false)
    const [ blur, setBlur ] = useState(true)

    /*useEffect(() => {
        fetch('https://ipapi.co/json/', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("fetched")
                //console.log(data)
            })
            .catch((error) => {
                console.log(error);
        });
    },[])*/

    const handleFocus = () => {
        setFocused(true)
        setBlur(false)
    }

    const handleBlur = () => {
        setFocused(false)
        setBlur(true)
    }

    const handleTextChange = text => {

        
        //setValue(formattedValue)
        
    }

    


    const BLUR_WITHVALUE = (blur && value) && true

    return(
        <View style={[!focused ? styles.onBlur : styles.onFocus,
            styles.formContainer, {
                marginTop,
                paddingLeft,
                zIndex: 10
            }]}>
            <FocusedWithValueOrNoValue focused={focused} name={name} />
            <BlurWithValue BLUR_WITHVALUE={BLUR_WITHVALUE} name={name} />
            <View style={styles.iconContainer}>
                <Text>{countryFlag?.flag}</Text>
            </View>
            <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="#6C727F"
                    placeholder={placeholder}
                    style={{ 
                        fontSize : themeStyle.FONT_14, 
                        flex: 1,
                        paddingVertical: 22,
                    }}
                    //value={value}
                    //onChangeText={handleTextChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyPress={({ nativeEvent }) => {
                        if(nativeEvent.key === 'Backspace') {
                            isCanlleling(true)
                        }else{
                            isCanlleling(false)
                        }
                    }}
            />
            
        </View>
        
    )
}

const FocusedWithValueOrNoValue = ({ focused, name }) => {
    return focused && <Text style={[
        styles.absoluteText,{
            color: themeStyle.MAIN_COLOR_1
        }
    ]}>{name}</Text>   
} 

const BlurWithValue = ({ BLUR_WITHVALUE, name }) => {
    return BLUR_WITHVALUE && <Text style={[
        styles.absoluteText,{
            color: themeStyle.GRAY
        }
    ]}>{name}</Text> 

}



function formatPhoneNumber(value, count, code, cancelling) {

    let codeLength = code.length
  
    let sliceNumber 
  
    if(codeLength === 1){
      sliceNumber = 1
    }else if(codeLength === 3){
      sliceNumber = 3
    }else {
      sliceNumber = 2
    }
  
    let formatedValue = value

    let formatedValueLength = value ? value.match(/\d/g).join("").length  : []

    console.log(formatedValueLength, count)

     if(cancelling) return formatedValue

    
  
    if(count === 2){
      const firstIndex = value[0]
      formatedValue = value.replace(firstIndex, code)
    }

    
  
   
      if(formatedValueLength > 4 
        && formatedValueLength < 13){
        formatedValue = formatedValue.match(/\d/g).join("")
        formatedValue = sliceNumber === 3 ? `+${formatedValue.slice(0,3)} ${formatedValue.slice(3,6)} ${formatedValue.slice(6,9)} ${formatedValue.slice(9)}`
        : sliceNumber === 2  
    
      }
  
      if(formatedValueLength > 14){
        formatedValue = formatedValue.match(/\d/g).join("")
        formatedValue = `+${formatedValue.slice(0,3)} ${formatedValue.slice(3,6)} ${formatedValue.slice(6,9)} ${formatedValue.slice(9)}`
       
      }
  
  
    return formatedValue
  }
  

const styles = StyleSheet.create({
    onBlur: {
        borderColor:themeStyle.LIGHTGREY,
    },
    onFocus:{
        borderColor: themeStyle.MAIN_COLOR_1,
    },
    absoluteText : {
        position:"absolute",
        left:32,
        top:-12,
        backgroundColor:themeStyle.MAIN_WHITE,
        paddingHorizontal: 8,
    },
    iconContainer : {
        paddingHorizontal: 18,
        flex: 0,
        justifyContent: "center",
        alignSelf: "stretch"
    },
    formContainer: {
        borderRadius: themeStyle.BORDER_RADIUS,
        flexDirection: "row",
        alignItems: "center",
        paddingRight:18,
        borderWidth: 1,
        position:"relative",
        fontSize: themeStyle.FONT_14,
        fontFamily: themeStyle.Manrope_500Medium,
    }
})


