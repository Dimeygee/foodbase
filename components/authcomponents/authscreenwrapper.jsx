import { View, StyleSheet, ScrollView} from "react-native"
import { AuthBigCircleSvg } from "./authsvgs/authsvgs"
import { AuthSmallCircleSvg } from "./authsvgs/authsvgs"
import themeStyle from "../../styles/theme.style"
import { HideKeyboard } from "../hidekeyboard"



export const AuthScreenWrapper = ({ children }) => {


    return(
        <HideKeyboard>
            <View 
                style={{ 
                    flex: 1 ,
                    paddingHorizontal:24,
                    backgroundColor: themeStyle.MAIN_WHITE,
                }}
            >
                <View 
                    style={[styles.absolute, {
                        left: 0,
                }]}>
                    <AuthBigCircleSvg />
                </View>
                <View 
                    style={[styles.absolute, {
                        right: 0,
                    }]}>
                    <AuthSmallCircleSvg />
                </View>
                {children}
            </View>
        </HideKeyboard>
    )

}


export const styles =  StyleSheet.create({
    absolute: {
        position: "absolute"
    }
})