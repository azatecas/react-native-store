import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const SignUp = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.signUp} onPress={onPress}>
      <Text style={styles.btnText}>REGISTER</Text>
    </TouchableOpacity>
  );
};

export default SignUp;
