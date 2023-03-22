
import { View, Text, StyleSheet, Pressable } from "react-native"
import { FormInput } from "../../components/authcomponents/form/input"
import themeStyle from "../../styles/theme.style"
import { HideKeyboard } from "../../components/hidekeyboard"
import { ArrowLeft } from "../../components/svgicons/svgicons"
import { useState } from "react"
import { EmailSvg, LockSvg , FlagSvg} from "../../components/authcomponents/authsvgs/authsvgs"
import { Button } from "../../components/button"
import { useNavigation } from "@react-navigation/native"
import { ProfileHeader } from "../../components/profile/profileheader"



export default function AccountInformation(){


    const Navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState('')

    const isButtonDisabled = !(email && password && phoneNumber) && true

    return(
        <HideKeyboard>
            <View style={styles.container}>
                <ProfileHeader headingText="Account Information" />
                <View style={{ flex :1  }}>
                    <FormInput placeholder="Enter your email address" value={email} setValue={setEmail}  icon={<EmailSvg />} name="Email Address" />
                    <FormInput type="number" placeholder="Enter your phone number" value={phoneNumber} setValue={setPhoneNumber}  icon={<FlagSvg />} name="Phone Number" marginTop={28} />
                    <FormInput  paddingLeft={4} secureTextEntry={true} value={password} setValue={setPassword} placeholder="Enter your password" icon={<LockSvg />} marginTop={28} name="Password" reset  />
                </View>
                <Button state={true} isButtonDisabled={isButtonDisabled} name="Change settings" backgroundColor="#FF7A28" color="white" paddingVertical={19} fontFamily='Manrope_700Bold' />
            </View>
        </HideKeyboard>
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