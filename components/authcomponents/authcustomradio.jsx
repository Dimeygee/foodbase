import { View, StyleSheet, Pressable, Text } from "react-native"
import themeStyle from "../../styles/theme.style"


export const AuthCustomRadio = ({ name, text1, text2 ,checked, select , next}) => {

    return( 
        <Pressable
            onPress={() => select(name)}
        >
            <View
                style={[
                    styles.radioContainer,
                    name == checked ? styles.checked : styles.unchecked,
                    next && {
                        marginTop: 24
                    }
                ]}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[
                        name === checked ? 
                        styles.checkedCircle : 
                        styles.uncheckedCircle,
                        {marginRight: 16, marginTop: 1}
                    ]}></View>
                    <Text style={[
                        name === checked ? 
                        styles.text1checked : 
                        styles.text1unchecked,
                        {
                            fontSize: themeStyle.FONT_16,
                            fontFamily: themeStyle.MANROPE_BOLD
                        }
                    ]}>{text1}</Text>
                </View>
                <Text style={{ 
                            fontSize: themeStyle.FONT_14, 
                            color: themeStyle.GRAY_2 ,
                            marginTop:8,
                            lineHeight: themeStyle.LINEHEIGHT,
                            paddingRight: 24,
                            paddingLeft: 36
                        
                }}>{text2}</Text>
                </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    radioContainer: {
        paddingTop: 28,
        paddingBottom: 24,
        paddingHorizontal:24,
        borderRadius: 16,
    },
    checked: {
        backgroundColor: "#FFF6E9",
    },
    unchecked: {
        backgroundColor: "#F4F4F6",
    },
    checkedCircle: {
        width:18,
        height:18,
        borderRadius:50,
        borderWidth:4,
        borderColor: themeStyle.MAIN_COLOR_1,
        backgroundColor: "#6A320F"
    }, 
    uncheckedCircle: {
        backgroundColor: "#D3D5DA",
        width:20,
        height:20,
        borderRadius:50,
    },
    text1checked: {
        color: themeStyle.MAIN_COLOR_1,
    },
    text1unchecked: {
        color: themeStyle.GRAY
    }
})