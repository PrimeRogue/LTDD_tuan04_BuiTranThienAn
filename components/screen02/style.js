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
    borderColor: "black",
    borderWidth: 15,
    borderRadius: "50%",
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
    backgroundColor: "teal",
    flex: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title2: {
    fontSize: "18px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
});
