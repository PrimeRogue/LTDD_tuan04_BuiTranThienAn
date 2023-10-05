import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to top, #00CCF9, #C7F3F6)",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40,
    paddingTop: 100,
    paddingBottom: 100,
  },

  circleBar: {
    width: "140px",
    height: "140px",
  },
  title: {
    width: "189px",
    fontSize: "25px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
  desc: {
    width: "100%",
    fontSize: "15px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "18px",
  },
  buttonContainer: {
    width: "100%",
  },
  title2: {
    fontSize: "18px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
  emailInput: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    padding: "10px",
  },
  emailTextInput: {
    height: "100%",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "15px",
    marginLeft: "15px",
  },
});
