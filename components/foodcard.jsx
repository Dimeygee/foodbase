import { View, Image, StyleSheet , Text , TouchableOpacity } from "react-native"
import themeStyle from "../styles/theme.style"
import { LoveSvg, StarSvg , CartSvg} from "./svgicons/svgicons"
import { useNavigation } from '@react-navigation/native';




export const FoodCard = ({ image, name, time, amount , liked, rating, decimal}) => {

    const Navigation = useNavigation()

    const handlePress = () => Navigation.navigate("fooddetails")

    return(
        <TouchableOpacity 
            onPress={handlePress}
            style={styles.foodContainer}>
            <View style={{ marginRight: 25 }}>
                <View style={{ 
                    position: "absolute" ,
                    top: -1.33,
                    left:-4.37
                }}><LoveSvg liked /></View>
                {image}
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.foodnametext}>{name}</Text>
                <View style={styles.timeRating}>
                    <View style={{flexDirection: themeStyle.ROW}}>
                        <Text style={styles.timetext}>{time}</Text>
                        <Text style={styles.timetext}>•</Text>
                    </View>
                    <View style={styles.ratingtext}>
                        <StarSvg />
                        <Text style={[styles.timetext,{ ...styles.ratingtext }]}>{rating}</Text>
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
                    <CartSvg />
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: themeStyle.ROW,
        alignItems: themeStyle.CENTER,
        backgroundColor: themeStyle.GRAY_1 ,
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: themeStyle.BORDER_RADIUS,
        marginBottom : 16
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
    timetext: {
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
    }
})