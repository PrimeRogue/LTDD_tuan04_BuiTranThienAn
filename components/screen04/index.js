import { Button, Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
export default function Screen04() {
  return (
    <View style={styles.container}>
      <View style={styles.circleBar}>
        <Text style={styles.headerText}>CODE</Text>
      </View>
      <Text style={styles.title} textBreakStrategy={"simple"}>
        VERIFICATION
      </Text>
      <View style={styles.desc}>
        Enter ontime password sent on ++849092605798
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "50px",
            height: "50px",
            borderWidth: "1px",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="VERIFY CODE"
          color={"#E3C000"}
          borderRadius={"10px"}
          width={"100%"}
        ></Button>
      </View>
    </View>
  );
}
