import { View , Text, StyleSheet} from "react-native"
import { Logo } from "./authsvgs/authsvgs"
import themeStyle from "../../styles/theme.style"


export const AuthHeader = ({ text, headertext }) => {
    return(
        <View style={{ alignItems: "center"}}>
            <Logo />
            <Text
                style={styles.headertext}
                >{headertext}
            </Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headertext: {
        fontFamily: themeStyle.MANROPE_BOLD,
        fontSize: themeStyle.FONT_24,
        fontWeight:'700',
        textAlign: "center",
        color: themeStyle.GRAY,
        lineHeight: 34,
        marginTop: 29,
        marginBottom: 16
    },
    text: {
        fontFamily: themeStyle.MANROPE_REGULAR,
        fontSize: themeStyle.FONT_14,
        color: themeStyle.GRAY_2,
        textAlign: "center",
        lineHeight:24
    }
})
