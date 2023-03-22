
import { View } from "react-native" 

export const Flex = ({ 
    children,
    alignItems="center", 
    justifyContent="space-between", 
    flexDirection="row" }) => {

    return (
        <View 
            style={{
                justifyContent,
                alignItems ,
                flexDirection,
                flexWrap: "wrap",
                textAlign:"center",
            }}
        >
            {children}
        </View>
    )


}