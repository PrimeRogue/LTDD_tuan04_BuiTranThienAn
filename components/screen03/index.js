import { Button, Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
export default function Screen03() {
  return (
    <View style={styles.container}>
      <View style={styles.circleBar}>
        <Image
          source={require("../../assets/lock-icon.png")}
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
