import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const SignIn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.signIn} onPress={onPress}>
      <Text style={styles.btnText}>LOGIN</Text>
    </TouchableOpacity>
  );
};

export default SignIn;
