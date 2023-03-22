
import { View, StyleSheet, ScrollView, Text, Image, Pressable } from "react-native"
import { Flex } from "../components/styles/styles"
import { MenuSvg, OrderMinusSvg, OrderPlusSvg } from "../components/svgicons/svgicons"
import themeStyle from "../styles/theme.style"


export default function OrderPage(){

    return(
          <ScrollView 
              showsVerticalScrollIndicator={false}
              style={{ 
                flex: 1, 
                backgroundColor: themeStyle.MAIN_WHITE,
                paddingTop: 56,
                paddingHorizontal: 24
            }}
          >
            <Flex>
                <Text style={styles.headerText}>You Order</Text>  
                <View>
                    <MenuSvg />
                </View>
            </Flex>
            <View style={{
                marginTop:40,
                marginBottom: 106,
            }}>
                <OrderedFoodCard 
                    name="Shrimp Pasta"
                    time="24min"
                    rating="4.5"
                    amount="$10"
                    decimal=".99"
                    image={<Image  
                        style={{width: "100%", height: "100%"}}
                        source={require("../assets/foodbase/pasta.png")} 
                />} 
                />
                <OrderedFoodCard 
                    name="Pakistan Food"
                    time="24min"
                    rating="4.5"
                    amount="$10"
                    decimal=".99"
                    image={<Image  
                        style={{width: "100%", height: "100%"}}
                        source={require("../assets/foodbase/pakistan.png")} 
                />} 
                />
            </View>
            <Flex>
                <Text style={styles.totaltext}>Sub total</Text>
                <Text style={[styles.pricetext,{
                    color: themeStyle.GRAY
                }]}>$22.08</Text>
            </Flex>
            <View style={{ 
                borderWidth: 1, 
                borderColor: "#D3D5DA" ,
                borderStyle: "dashed",
                marginVertical: 24
            }}>

            </View>
            <Flex >
                <Text style={styles.totaltext}>Total</Text>
                <Text style={[
                    styles.pricetext, {
                        color: themeStyle.MAIN_COLOR_1
                    }
                ]}>$24.08</Text>
            </Flex>
            <Pressable style={{
                marginTop: 24,
                backgroundColor: themeStyle.MAIN_COLOR_1,
                borderRadius: themeStyle.BORDER_RADIUS,
            }}>
                <Text style={{ 
                    textAlign:"center", 
                    color: "#fff",
                    paddingVertical: 19,
                    fontFamily:themeStyle.MANROPE_BOLD,
                    lineHeight: themeStyle.LINEHEIGHT,
                    fontWeight: themeStyle.FONTWEIGHT_700,
                    fontSize: themeStyle.FONT_16
                    }}>Pay now</Text>
            </Pressable>
          </ScrollView>
    )
}


const OrderedFoodCard = ({image, name, time, rating, decimal, amount}) => (
    
        <View style={styles.foodContainer}>
            <View style={{ 
                flexDirection:themeStyle.ROW  }}>
                <View style={{  
                    width: 85,
                    height: 88,
                    marginRight: 16
                }}>
                    <View style={{ marginRight: 25, width:"100%", height:"100%" }}>
                        {image}
                    </View>
                </View>
                <View >
                    <Text style={styles.foodnametext}>{name}</Text>
                    <View style={styles.timeRating}>
                        <View style={{flexDirection: themeStyle.ROW}}>
                            <Text style={styles.appname}>Foodbase</Text>
                        </View>
                    </View>
                    <View style={styles.amount_cartcontainer}>
                        <View style={{ 
                            flexDirection: themeStyle.ROW,
                            alignItems: 'flex-end',
                            width: 80,
                            marginRight:16
                            }}>
                            <Text style={{ 
                                color: themeStyle.GRAY, 
                                fontSize: 18 ,
                                fontFamily: themeStyle.MANROPE_BOLD,
                                lineHeight: 28
                            }}>
                                {amount}
                            </Text>
                            <Text style={{ 
                                color: themeStyle.GRAY_2, 
                                fontSize: 14 ,
                                fontFamily: themeStyle.MANROPE_BOLD,
                                lineHeight: 28,
                            }}>{decimal}</Text>
                        </View>
                    </View>
                </View>    
            </View>  
            <View style={styles.add_minusContainer}>
                <OrderMinusSvg />
                <Text style={{
                    fontWeight: themeStyle.FONTWEIGHT_700,
                    fontFamily: themeStyle.MANROPE_BOLD,
                    lineHeight: themeStyle.LINEHEIGHT,
                    color: themeStyle.GRAY,
                    fontSize: themeStyle.FONT_14
                  }}>1</Text>
                <OrderPlusSvg />
            </View>
        </View>
)
  
  
const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: themeStyle.ROW,
        alignItems: themeStyle.CENTER,
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: themeStyle.BORDER_RADIUS,
        marginBottom : 24,
        borderWidth:1,
        borderColor: "#F4F4F6"
    },
    foodnametext: {
        lineHeight: 28,
        fontSize: 18,
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY
    },
    timeRating: {
        marginTop: 12,
        marginBottom: 8,
        flexDirection: themeStyle.ROW,
    }  ,
    appname: {
        lineHeight: 16,
        fontSize: 12,
        fontFamily: themeStyle.MANROPE_REGULAR,
        color: themeStyle.GRAY_2
    } ,
    ratingtext: {
        paddingLeft: 6.67,
        flexDirection: themeStyle.ROW
    },
    amount_cartcontainer: {
        flexDirection: themeStyle.ROW,
    },
    headerText: {
      lineHeight:34,
      fontSize: 24, 
      color: themeStyle.GRAY,
      fontFamily: themeStyle.MANROPE_BOLD,
      fontWeight: "700"
    },
    add_minusContainer: {
        alignSelf: "stretch",
        justifyContent: "space-between",
        alignItems: "center"
    },
    totaltext: {
        fontFamily:themeStyle.MANROPE_REGULAR,
        lineHeight: themeStyle.LINEHEIGHT,
        color: themeStyle.GRAY_2,
        fontWeight: themeStyle.FONTWEIGHT_400,
        fontSize: themeStyle.FONT_14
    },
    pricetext:{
        fontFamily:themeStyle.MANROPE_BOLD,
        lineHeight: themeStyle.LINEHEIGHT,
        fontWeight: themeStyle.FONTWEIGHT_700,
        fontSize: themeStyle.FONT_14
    }
})