import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import { hide } from "expo/build/launch/SplashScreen";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsCont}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 190,
  },
  detailsCont: {
    padding: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 3,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;
