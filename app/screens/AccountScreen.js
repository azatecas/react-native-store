import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem/ListItem";
import colors from "../config/colors";

const manuItems = [
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

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="John Smith"
          subTitle="joshsmith@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "20px",
  },
});

export default AccountScreen;
