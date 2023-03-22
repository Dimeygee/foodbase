



import { View, StyleSheet, ScrollView, Text, Image } from "react-native"
import themeStyle from "../styles/theme.style"
import { Flex } from "../components/styles/styles"
import { MenuSvg } from "../components/svgicons/svgicons"
import { SearchBar } from "../components/searchbar"
import { Item } from "../components/item"
import { FoodCard } from "../components/foodcard"

export default function FavouritePage(){

    return(
      <View style={styles.favouritecontainer}>
          <ScrollView 
              showsVerticalScrollIndicator={false}
          >
            <Flex>
              <Text style={styles.headerText}>Favourite</Text>  
              <View>
                <MenuSvg />
              </View>
            </Flex>
            <View style={{ marginVertical: 24 }}>
              <SearchBar placeholder="Search Favorite Food" favourite />
            </View>
            <Flex>
              <Item text="🥘 All Food" active />
              <Item text="🍰 Bakery"  />
              <Item text="🍤 Seafood"  />
            </Flex>
            <View style={{ marginVertical: 24 }}>
              <Flex>
                <FoodCard 
                    image={<Image  
                        style={{width: 121, height: 124}}
                        source={require("../assets/foodbase/pasta.png")} 
                    />}
                    name="Shrimp Pasta"
                    time="24min"
                    rating="4.5"
                    amount="$10"
                    decimal=".99"
                />
                <FoodCard 
                    image={<Image  
                        style={{width: 122, height: 124}}
                        source={require("../assets/foodbase/pakistan.png")} 
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
                        source={require("../assets/foodbase/chicken.png")} 
                    />}
                    name="Pieces Chicken"
                    time="24min"
                    rating="4.5"
                    amount="$10"
                    decimal=".99"
                />
              </Flex>
            </View>
          </ScrollView>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      favouritecontainer: {
        backgroundColor: themeStyle.MAIN_WHITE,
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 56,
      },
      headerText: {
        lineHeight:34,
        fontSize: 24, 
        color: themeStyle.GRAY,
        fontFamily: themeStyle.MANROPE_BOLD,
        fontWeight: "700"
      }
  })

  