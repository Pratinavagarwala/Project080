import * as  React from "react" ;
import {createBottomTabNavigator} from "react-navigation-tabs";
import ItemExchangeScreen from "../Screens/ItemExchangeScreen";
import ItemRequestScreen from "../Screens/ItemRequestScreen";

export const AppTabNavigator=createBottomTabNavigator({
    ExchangeItem:{screen:ItemExchangeScreen},
    RequestItem:{screen:ItemRequestScreen}
})