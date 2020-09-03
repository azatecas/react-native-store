import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import bgimage from "../assets/background.jpg";
import logoImg from "../assets/logo-red.png";
import SignUp from "../components/Buttons/SignUp";
import SignIn from "../components/Buttons/SignIn";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground blurRadius={2} style={styles.background} source={bgimage}>
      <View style={styles.logoCont}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <SignIn onPress={() => console.log("Signed In!")} />
      <SignUp onPress={() => console.log("registered!")} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoCont: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
