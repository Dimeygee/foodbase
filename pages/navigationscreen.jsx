import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTab } from "../components/customtab";
import Homepage from "./homescreen/homepage";
import ProfilePage from "./profile/profile";
import FavouritePage from "./favourite"
import OrderPage from "./order"
import FoodDetails from "./foodDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountInformation from "./profile/accountinformation";
import InviteFriends from "./profile/invitefriends";


const Tab  = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export function TabNavigation(){

  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }} 
      tabBar={props => <CustomTab {...props} />}
      initialRouteName="Profile"
    >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Favourite" component={FavouritePage} />
        <Tab.Screen name="Order" component={OrderPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  )
}


export function StackNavigation(){

  return(
    <Stack.Navigator
      //initialRouteName="accountinformation"
      screenOptions={{
        headerShown: false,
      }} 
    >
        <Stack.Screen name="tabscreen" component={TabNavigation} />
        <Stack.Screen name="fooddetails" component={FoodDetails} />
        <Stack.Screen name="accountinformation" component={AccountInformation} />
        <Stack.Screen name="inviteyourfriends" component={InviteFriends} />
    </Stack.Navigator>
  )
}


