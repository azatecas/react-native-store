import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.signIn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
