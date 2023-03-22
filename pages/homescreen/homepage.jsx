

import { ScrollView, View , StyleSheet, Text, Image} from "react-native"
import { MenuSvg } from "../../components/svgicons/svgicons"
import themeStyle from "../../styles/theme.style"
import { SearchBar } from "../../components/searchbar"
import { Item } from "../../components/item"
import { FoodCard } from "../../components/foodcard"

export default function Homepage(){

  return(
    <View style={[styles.container]}>
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.usercontainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image 
                        source={require('../../assets/foodbase/Avatar.png')}  
                        style={{width: 41, height: 41}}
                    />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.text1}>
                            Good Morning
                        </Text>
                        <Text>Hi, Kítbase</Text>
                    </View>
                </View>
                <View>
                    <MenuSvg />
                </View>
            </View>
            <Text style={styles.delicious}>Delicious Food Near You</Text>
            <SearchBar placeholder="Search Your Food" />
            <View style={styles.items} >
                <Item text="🥘 All Food" active />
                <Item text="🍰 Bakery" />
                <Item text="🍤 Seafood" />
                <Item text="🍖 Chicken" />
                <Item text="🍕 Pizza" />
                <Item text="🍔 Burger" />
            </View>
            <View style={{ 
                justifyContent: "space-between", 
                flexDirection: "row", 
                alignItems: "center",
                marginBottom : 24
            }}>
                <Text style={styles.popular}>Most Popular</Text>
                <Text style={{ 
                    color: themeStyle.MAIN_COLOR_1,
                    fontFamily: themeStyle.MANROPE_BOLD,
                    lineHeight: themeStyle.LINEHEIGHT,
                    fontSize: themeStyle.FONT_14
                }}>View all</Text>
            </View>
            <FoodCard 
                image={<Image  
                    style={{width: 121, height: 124}}
                    source={require("../../assets/foodbase/pasta.png")} 
                />}
                name="Shrimp Pasta"
                time="24min"
                rating="4.5"
                amount="$10"
                decimal=".99"
            />
            <FoodCard 
                image={<Image  
                    style={{width: 121, height: 124}}
                    source={require("../../assets/foodbase/pakistan.png")} 
                />}
                name="Pakistan Food"
                time="24min"
                rating="4.5"
                amount="$10"
                decimal=".99"
            />
            <FoodCard 
                image={<Image  
                    style={{width: 121, height: 124}}
                    source={require("../../assets/foodbase/chicken.png")} 
                />}
                name="Pieces Chicken"
                time="24min"
                rating="4.5"
                amount="$10"
                decimal=".99"
            />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 56,
        backgroundColor:themeStyle.MAIN_WHITE,
    },
    usercontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    text1: {
        fontSize: 12,
        fontFamily: themeStyle.MANROPE_REGULAR,
        color: themeStyle.GRAY_2,
        lineHeight: 16
    },
    text2: {
        fontSize: 14,
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY,
        lineHeight: 24
    },
    delicious: {
        marginVertical: 24,
        lineHeight:34,
        fontSize: 24, 
        color: themeStyle.GRAY,
        fontFamily: themeStyle.MANROPE_BOLD
    },
    items: { 
        flex: 1, 
        flexDirection: "row", 
        flexWrap: "wrap",
        marginTop:8 ,
        marginBottom: 24
    },
    popular: {
        lineHeight: 32,
        fontSize: 22,
        fontFamily: themeStyle.MANROPE_BOLD,
        color: themeStyle.GRAY
    }
})