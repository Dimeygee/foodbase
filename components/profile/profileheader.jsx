
import { View, Pressable, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArrowLeft } from "../../components/svgicons/svgicons"
import themeStyle from "../../styles/theme.style"


export const ProfileHeader = ({ headingText }) => {

    const Navigation = useNavigation()

    return (
        <View style={styles.header}>
            <Pressable 
                    onPress={() => Navigation.goBack()}
                    style={styles.arrowcontainer}>
                <ArrowLeft />
            </Pressable>           
                <Text style={styles.headingText}>{headingText}</Text>
            </View>
    )

}




const styles = StyleSheet.create({
    container: {
        backgroundColor: themeStyle.MAIN_WHITE,
        flex: 1,
        paddingTop: 56,
        paddingHorizontal:24,
        paddingBottom: 40
    },
    header: {
        flexDirection: themeStyle.ROW,
        alignItems:themeStyle.CENTER,
        marginBottom: 52
    },
    arrowcontainer: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderColor: themeStyle.LIGHTGREY,
        borderWidth: 1,
        borderRadius: 50
    },
    headingText: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: themeStyle.FONTWEIGHT_700,
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY,
        marginLeft: 41
    }
})