import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circleBar}>
        <Image
          source={require("./assets/lock-icon.png")}
          style={{ height: "110%" }}
        />
      </View>
      <Text style={styles.title} textBreakStrategy={"simple"}>
        FORGET PASSWORD
      </Text>
      <View style={styles.desc}>
        Provide your account’s email for which you want to reset your password
      </View>
      <View style={styles.emailInput}>
        <Icon
          name="envelope"
          size={25}
          color="black"
          style={styles.emailIcon}
        />
        <TextInput placeholder="Email" style={styles.emailTextInput} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="NEXT"
          color={"#E3C000"}
          borderRadius={"10px"}
          width={"100%"}
        ></Button>
      </View>
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
    // flex: 0,
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
