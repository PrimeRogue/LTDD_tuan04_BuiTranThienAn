import { View, Text, TextInput, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import { styles } from "./style";
export default function Screen06() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "700",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Register
      </Text>
      <View style={{ width: "100%", marginBottom: "18px" }}>
        <TextInput
          placeholder="Name"
          style={{
            fontSize: "18px",
            paddingHorizontal: "15px",
            paddingVertical: "12px",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        />
      </View>
      <View style={{ width: "100%", marginBottom: "18px" }}>
        <TextInput
          placeholder="Phone"
          style={{
            fontSize: "18px",
            paddingHorizontal: "15px",
            paddingVertical: "12px",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        />
      </View>
      <View style={{ width: "100%", marginBottom: "18px" }}>
        <TextInput
          placeholder="Email"
          style={{
            fontSize: "18px",
            paddingHorizontal: "15px",
            paddingVertical: "12px",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        />
      </View>
      <View
        style={{ width: "100%", position: "relative", marginBottom: "18px" }}
      >
        <TextInput
          placeholder="Password"
          style={{
            fontSize: "18px",
            paddingHorizontal: "15px",
            paddingVertical: "12px",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
          secureTextEntry={true}
        />
        <Icon
          name="eye"
          size={35}
          color="black"
          style={{
            position: "absolute",
            right: "16px",
            padding: 0,
            transform: "translateY(15%)",
          }}
        />
      </View>
      <View style={{ width: "100%", marginBottom: "18px" }}>
        <TextInput
          placeholder="Birthday"
          style={{
            fontSize: "18px",
            paddingHorizontal: "15px",
            paddingVertical: "12px",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        />
      </View>
      <View style={{ width: "100%" }}>
        <RadioButtonGroup
          containerStyle={{ flexDirection: "row" }}
          radioBackground="green"
        >
          <RadioButtonItem
            value="test2"
            style={{
              marginHorizontal: "20px",
              color: "#000",
              borderColor: "#000",
            }}
            label={<Text style={{ fontWeight: "500" }}>Male</Text>}
          />
          <RadioButtonItem
            value="Female"
            style={{
              marginHorizontal: "20px",
              color: "#000",
              borderColor: "#000",
            }}
            label={<Text style={{ fontWeight: "500" }}>Female</Text>}
          />
        </RadioButtonGroup>
      </View>
      <Pressable style={{ width: "100%", marginTop: "30px" }}>
        <Text
          style={{
            paddingHorizontal: "20px",
            paddingVertical: "12px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500",
            color: "#D8EFDE",
            backgroundColor: "#e53935",
          }}
        >
          REGISTER
        </Text>
      </Pressable>
      <Text
        style={{ textAlign: "center", fontSize: "14px", marginTop: "20px" }}
      >
        When you agree to terms and conditions
      </Text>
    </View>
  );
}
