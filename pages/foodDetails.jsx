import { View, ScrollView, StyleSheet, Text, Pressable , Image} from "react-native";
import { Flex } from "../components/styles/styles";
import themeStyle from "../styles/theme.style";
import { MinusSvg, PlusSvg, TabCartSvg , TimeSvg, CalorieSvg , RatingSvg} from "../components/svgicons/svgicons";
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, HeartSvg } from "../components/svgicons/svgicons";
import { useNavigation } from "@react-navigation/native";



export default function FoodDetails(){


    const Navigation = useNavigation()

    const handlePress = () => Navigation.goBack()

    
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 24 }}>
                    <Flex>
                        <Pressable onPress={handlePress}>
                            <ArrowLeft />
                        </Pressable>
                        <HeartSvg  />
                    </Flex>
                </View>
                <View 
                        style={styles.containerdetails}
                    >
                        <Text style={styles.text1}>Shrimp Pasta</Text>
                        <View style={{
                            flexDirection: themeStyle.ROW,
                            marginVertical: 24,
                        }}>
                            <Text style={styles.text2}>$10</Text>
                            <Text style={styles.decimalText}>.49</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <View style={styles.add_subtractcartcontainer}>
                                <View style={{
                                    paddingVertical: 8,
                                    paddingHorizontal: 22,
                                    alignItems: "center",
                                    width: 160,
                                    borderRadius: themeStyle.BORDER_RADIUS,
                                    backgroundColor: themeStyle.MAIN_COLOR_1,
                                    flexDirection: themeStyle.ROW,
                                    justifyContent: themeStyle.SPACEBETWEEN
                                }}>
                                    <MinusSvg />
                                    <Text style={{
                                        fontSize: 24,
                                        fontWeight: themeStyle.FONTWEIGHT_700,
                                        fontFamily: themeStyle.MANROPE_BOLD,
                                        color: themeStyle.MAIN_WHITE

                                    }}>2</Text>
                                    <PlusSvg />
                                </View>
                            </View>
                            <Image 
                                style={{ 
                                    width: "100%",
                                    height: "100%"
                                }}
                                source={require('../assets/foodbase/pastadetail.png')} 
                            />
                        </View>
                        <View style={{ 
                            marginVertical: 40, 
                            width: "100%" ,
                            flexDirection: themeStyle.ROW,
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Flex alignItems="center">
                                <TimeSvg />
                                <Text style={styles.time_star_calorie}>20-30 min</Text>
                            </Flex>
                            <Flex>
                                <RatingSvg />
                                <Text style={styles.time_star_calorie}>4.5(1.2k)</Text>
                            </Flex>
                            <Flex>
                                <CalorieSvg />
                                <Text style={styles.time_star_calorie}>348Kcal</Text>
                            </Flex>
                        </View>
                </View>
                <View>
                    <Text style={styles.aboutheader}>About</Text>
                    <Text style={styles.aboutarticle}>
                        Marinated shrimp and linguini tossed with fresh garlic, olive  Tempora, perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, minus et culpa reprehenderit corporis fugit deserunt ratione minima velit odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae odio corrupti quos ea molestias dolor, deleniti et ratione, laborum minus sequi nam enim corporis nostrum impedit maiores vel dicta repellendus. Itaque saepe excepturi impedit labore eum dolores eius! Modi, dolore officiis. Cum non rerum impedit assumenda saepe. Nobis repellat culpa magni, atque molestias cum sed. Vero maiores provident nesciunt odit dolorem ipsum, ducimus sequi laboriosam expedita quibusdam autem perspiciatis labore aspernatur iusto magnam optio eum tempora quos quod! Facere, ex dignissimos eaque molestiae ut repudiandae quia consequuntur commodi delectus repellat laborum voluptates atque doloribus facilis asperiores doloremque odit non adipisci!
                    </Text>
                </View>
            </ScrollView>
            <LinearGradient 
                    colors={['rgba(255, 255, 255, 0.0001)', '#FFFFFF']}
                    locations={[0, 0.5]}
                    style={styles.cartcontainer}>
                    <Pressable
                    //onPress={handlePress}
                    style={styles.button}
                    >

                        <TabCartSvg  color="#ffffff" />
                        <Text style={styles.textButton}>Add to Cart</Text>
                    </Pressable>
            </LinearGradient>
        </View>
    )

} 



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 56,
        backgroundColor:themeStyle.MAIN_WHITE,
        flex: 1,
        position: "relative"
    },
    cartcontainer: {
        paddingTop: 58,
        paddingBottom:40,
        paddingHorizontal: 24,
        bottom: 0,
        right: 0,
        left:0,
        position: "absolute",
        flex: 1,
    },
    button: {
        backgroundColor: themeStyle.MAIN_COLOR_1,
        flex: 1,
        flexDirection: themeStyle.ROW,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: themeStyle.BORDER_RADIUS
    },
    textButton: {
        color:themeStyle.MAIN_WHITE,
        marginLeft: 10,
        lineHeight: 26, 
        paddingVertical: 19,
        fontWeight: "700",
        fontFamily: themeStyle.MANROPE_BOLD,
        fontSize: 16
    },
    imageContainer: {
        width: 241,
        height: 247,
        position: "relative",
    },
    containerdetails: {
        alignItems: 'center'
    },
    text1: {
        textAlign:"center",
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 34,
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY,
        textAlign: "center",
        flex: 1,

    },
    text2: {
        color: themeStyle.GRAY,
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 34,
        fontFamily: themeStyle.MANROPE_BOLD,
        alignSelf: "flex-end" 
    },
    decimalText: {
        alignSelf: "flex-end" ,
        color: "#12182666",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 27,
        fontFamily: themeStyle.MANROPE_BOLD,     
    },
    add_subtractcartcontainer: {
        position: "absolute",
        flexDirection: themeStyle.ROW,
        bottom: 0,
        zIndex: 1,
        width: "100%",
        justifyContent: "center"
    } ,
    time_star_calorie: {
        color: themeStyle.GRAY,
        lineHeight: themeStyle.LINEHEIGHT,
        marginLeft: 12,
        fontWeight: "700",
        fontFamily: themeStyle.MANROPE_BOLD, 
    },  
    aboutheader: {
        lineHeight: 26,
        fontSize: 16,
        fontWeight: "700",
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY
    },
    aboutarticle: {
        color: "#6C727F",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: themeStyle.MANROPE_REGULAR,
        lineHeight: themeStyle.LINEHEIGHT,
        marginTop: 20,
    }
})