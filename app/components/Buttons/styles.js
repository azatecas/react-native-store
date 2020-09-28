import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  signIn: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  signUp: {
    backgroundColor: colors.secondary,
    height: 50,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  btnText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "900",
  },
});

export default styles;
