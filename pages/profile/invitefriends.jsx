import { View, StyleSheet , Image, Text} from "react-native"
import themeStyle from "../../styles/theme.style"
import { ProfileHeader } from "../../components/profile/profileheader"
import { Button } from "../../components/button"


export default function InviteFriends(){
    return(
        <View style={styles.container}>
            <ProfileHeader headingText="Refer & Earn" />
            <View style={styles.contentContainer}>
                <View style={styles.innercontent}>
                    <View style={styles.ImageContainer}>
                        <Image 
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../assets/foodbase/Illustration.png")} 
                        />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text1}>Refer a friend</Text>
                        <Text style={styles.text2}>Share your promo code with a friend {'\n'} & you both get $15.</Text>
                    </View>
                    <View style={styles.foodbase}>
                        <Text style={styles.foodbaseText}>foodbase50%</Text>
                    </View>
                </View>
                <Button isButtonDisabled={false} name="Share" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
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
    contentContainer: {
        flex: 1
    }, 
    innercontent:{
        alignItems: "center",
        marginTop: 124,
        flex: 1
    },
    ImageContainer: {
        width:96,
        height:96
    },
    textview: {
        marginTop:24,
        marginBottom: 56
    },
    text1: {
        textAlign: "center",
        fontSize: 22,
        lineHeight: 32,
        color: themeStyle.GRAY,
        fontWeight: themeStyle.FONTWEIGHT_700,
        fontFamily: themeStyle.MANROPE_BOLD,
        marginBottom: 8
    },
    text2: {
        textAlign: "center",
        fontSize: 12,
        lineHeight: 16,
        color: themeStyle.GRAY_2,
        fontWeight: themeStyle.FONTWEIGHT_400,
        fontFamily: themeStyle.MANROPE_REGULAR,
    },
    foodbase: {
        backgroundColor: "rgba(255, 122, 40, 0.08)",
        width:185,
        paddingVertical:24,
        borderStyle: "dashed",
        borderColor: "#FF7A28",
        borderWidth: 1,
        borderRadius: 16
    },
    foodbaseText: {
        fontSize: 18,
        lineHeight: 28,
        color: themeStyle.MAIN_COLOR_1,
        fontWeight: themeStyle.FONTWEIGHT_700,
        fontFamily: themeStyle.MANROPE_BOLD,
        textAlign: "center",
    }
    
})