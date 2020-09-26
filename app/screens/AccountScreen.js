import React from "react";
import { StyleSheet, View,Text, Image, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from '../components/ListItemSeparator'


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

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          title="John Smith"
          subTitle="joshsmith@gmail.com"
          image={image}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          />
      </View>

      <View>
        <ListItem
          title={"Logout"}
          IconComponent={
            <Icon name="logout" backgroundColor="#ffe66d"/>
          }
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  }
});

export default AccountScreen;
