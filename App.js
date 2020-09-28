import React, {useState} from "react";
import { View, Text, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import SignIn from "./app/components/Buttons/SignIn";
import SignUp from "./app/components/Buttons/SignUp";
import Card from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen"
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {


  return (
    <LoginScreen />
    );
}
