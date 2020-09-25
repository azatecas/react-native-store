import React from "react";
import { StyleSheet, View,Text, Image, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";


const image = require('../assets/mosh.jpg');

// we dont want to recreate this array every render so set it outside of component
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const hey = "hello world"
const AccountScreen = () => {
  return (
    <Screen>
      <View>
        <ListItem
          title="John Smith"
          subTitle="joshsmith@gmail.com"
          image={image}
        />
      </View>
      <View>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            ImageComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "20px",
  }
});

export default AccountScreen;
