import { Flex } from "../../components/styles/styles";
import { View, StyleSheet,  SectionList,Text, Image, Pressable} from "react-native"
import themeStyle from "../../styles/theme.style";
import { ProfileSvg, LocationSvg, RateUsSvg, NotificationSvg,FlagSvg, PayMentSvg, EmailAtSvg, ArrowLeft, ArrowRight } from "../../components/svgicons/svgicons";
import { LockSvg } from "../../components/authcomponents/authsvgs/authsvgs";
import { ToggleSwitch } from "../../components/toggleSwitch";
import { useNavigation } from "@react-navigation/native";




export default function ProfilePage(){


   const DATA = [
        {
            title: 'General',
            data: [
                { heading: "Account Information", article:"Change your Account information", icon: <ProfileSvg />  }, 
                { heading: "Password", article:"Change your Password", icon: <LockSvg /> },
                { heading: "Payment Methods", article:"Add your Credit & Debit cards", icon: <PayMentSvg /> },
                { heading: "Delivery Locations", article:"Change your Delivery Locations", icon: <LocationSvg /> }, 
                { heading: "Invite your friends", article:"Get $5 for each invitation!" , icon: <EmailAtSvg />},
            ]
        },
        {
            title: 'Notifications',
            data: [
                { heading: "Notifications", article:"You will receive daily updates", icon: <NotificationSvg />, toggleSwitch: <ToggleSwitch /> },
                { heading: "Promotional Notifications", article:"Get notified when promotions", icon: <NotificationSvg />, toggleSwitch: <ToggleSwitch /> }, 
                
            ]
        },
        {
            title: 'More',
            data: [
                { heading: "Rate Us", article:"You will receive daily updates", icon: <RateUsSvg /> },
                { heading: "FAQ", article:"Frequently Asked Questions", icon: <FlagSvg /> },
            ],
        },
      ];

    return(
        <View style={styles.container}>
            <Flex>
              <Text style={styles.headerText}>Profile</Text>  
              <View style={styles.notification}>
                <View style={styles.notifier}></View>
              </View>   
            </Flex>
            <View style={styles.profilecontainer}>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={{ width: "100%", height:"100%" }}
                        source={require("../../assets/foodbase/Avatar.png")} />
                </View>
                <View style={styles.profilenameContainer}>
                    <Text style={styles.name}>Kitsbase</Text>
                    <Text style={styles.email}>@foodbase</Text>
                </View> 
            </View>
            <SectionList
                showsVerticalScrollIndicator={false}
                sections={DATA}
                renderItem={({item, section}) => {
                    if(section.title === "Notifications"){
                        return (
                            <ProfileButton 
                                icon={item.icon} 
                                btntext1={item.heading} 
                                btntext2={item.article}
                                toggleSwitch={item.toggleSwitch}
                                notification
                            />
                        )
                    }
                    return (
                        <ProfileButton 
                            icon={item.icon} 
                            btntext1={item.heading} 
                            btntext2={item.article}
                        />
                    )
                }}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{ 
                        lineHeight: 16,
                        fontFamily:themeStyle.MANROPE_BOLD,
                        fontSize: 14,
                        fontWeight: themeStyle.FONTWEIGHT_700,
                        color: themeStyle.GRAY_2,
                        marginTop: 40,
                        marginBottom: 16
                     }}>{title}</Text>
                  )}
                  
            />
            
            
        </View>
    )
}


const ProfileButton = ({ icon, btntext1, btntext2, notification, toggleSwitch}) => {

    const screen = btntext1.split(" ").join("").toLowerCase()

    const Navigation = useNavigation()

    return(
        <Pressable
            onPress={() => Navigation.navigate(`${screen}`)}
                style={styles.buttoncontainer}
            >
                <View style={[styles.iconview, 
                {
                    flex: 0.2,
                }]}>
                    {icon}
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.btntext1}>{btntext1}</Text>
                    <Text style={styles.btntext2}>{btntext2}</Text>
                </View>
                <View style={[styles.iconview, 
                    !notification && {flex: 0.2,},
                    notification && { paddingRight: 17 }]}>
                    { notification && toggleSwitch }
                    {!notification && <ArrowRight />}
                </View>
    </Pressable>
    )
    
}


    
  
  const styles = StyleSheet.create({
    container: {
        paddingTop: 56, 
        paddingHorizontal: 24,
        backgroundColor: themeStyle.MAIN_WHITE,
        flex: 1
    },
    headerText: {
        lineHeight:34,
        fontSize: 24, 
        color: themeStyle.GRAY,
        fontFamily: themeStyle.MANROPE_BOLD,
        fontWeight: "700"
    },
    notification: {
        position: "relative",
        width:20,
        height: 20,
        backgroundColor:"#D3D5DA",
        borderRadius: 50
    },
    notifier: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: themeStyle.MAIN_COLOR_1,
        width: 6,
        height: 6,
        borderRadius: 50
    }, 
    avatarContainer: {
        width: 80,
        height: 80,
    },
    profilecontainer: {
        flexDirection: themeStyle.ROW ,
        marginTop:45,
        alignItems:"center"
    },
    profilenameContainer:{
        marginLeft: 24
    },
    name: {
        color: themeStyle.GRAY,
        lineHeight: 26,
        fontFamily:themeStyle.MANROPE_BOLD,
        fontSize: themeStyle.FONT_16,
        fontWeight: themeStyle.FONTWEIGHT_700,
    },     
    email: {
        color: themeStyle.GRAY_2,
        lineHeight: 26,
        fontFamily:themeStyle.MANROPE_REGULAR,
        fontSize: 12,
        fontWeight: themeStyle.FONTWEIGHT_400,
    },
    heading: {
        color: themeStyle.GRAY,
        lineHeight: themeStyle.LINEHEIGHT,
        fontFamily:themeStyle.MANROPE_BOLD,
        fontSize: 14,
        fontWeight: themeStyle.FONTWEIGHT_700,
    },
    article: {
        color: themeStyle.GRAY_2,
        lineHeight:16,
        fontFamily:themeStyle.MANROPE_REGULAR,
        fontSize: 12,
        fontWeight: themeStyle.FONTWEIGHT_400,
    },
    textcontainer: {
        paddingVertical: 16,
        flex:1
    },
    buttoncontainer: {
        borderColor:themeStyle.LIGHTGREY,
        borderWidth: 1,
        borderRadius: 24, 
        flexDirection:themeStyle.ROW,
        marginBottom: 16
    },
    iconview: {
        alignSelf: "stretch",
        alignItems: themeStyle.CENTER,
        justifyContent: themeStyle.CENTER
    },
    btntext1: {
        color: themeStyle.GRAY,
        lineHeight: themeStyle.LINEHEIGHT,
        fontFamily:themeStyle.MANROPE_BOLD,
        fontSize: 14,
        fontWeight: themeStyle.FONTWEIGHT_700,
    },
    btntext2: {
        color: themeStyle.GRAY_2,
        lineHeight:16,
        fontFamily:themeStyle.MANROPE_REGULAR,
        fontSize: 12,
        fontWeight: themeStyle.FONTWEIGHT_400,
        marginTop: 4
    }
  })