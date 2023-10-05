import { Button, Text, View } from "react-native";
import { styles } from "./style";
export default function Screen02() {
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
