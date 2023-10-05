import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circleBar}></View>
      <Text style={styles.title} textBreakStrategy={"simple"}>
        GROW YOUR BUSINESS
      </Text>
      <View style={styles.desc}>
        We will help you to grow your business using online server
      </View>
      <View style={styles.buttonContainer}>
        <Button title="LOGIN" color={"#E3C000"} borderRadius={"10px"}></Button>
        <Button
          title="SIGN UP"
          color={"#E3C000"}
          borderRadius={"10px"}
        ></Button>
      </View>
      <Text style={styles.title2} textBreakStrategy={"simple"}>
        HOW WE WORK?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
