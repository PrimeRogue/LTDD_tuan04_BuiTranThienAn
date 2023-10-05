import { View, Text, TextInput, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./style";
export default function Screen05() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "700",
            marginBottom: "50px",
          }}
        >
          LOGIN
        </Text>
        <View style={{ width: "100%", marginBottom: "40px" }}>
          <TextInput
            placeholder="Email"
            style={{
              width: "100%",
              paddingVertical: "12px",
              paddingHorizontal: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              flex: 1,
              fontSize: "18px",
              fontWeight: "400",
              outline: "none",
            }}
          />
        </View>
        <View
          style={{ width: "100%", marginBottom: "40px", position: "relative" }}
        >
          <TextInput
            placeholder="Password"
            style={{
              width: "100%",
              paddingVertical: "12px",
              paddingHorizontal: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              flex: 1,
              fontSize: "18px",
              fontWeight: "400",
              outline: "none",
              paddingRight: "53px",
            }}
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
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Pressable style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: "18px",
              backgroundColor: "#c34e38",
              paddingVertical: "12px",
              color: "#D8EFDE",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            LOGIN
          </Text>
        </Pressable>
        <Text
          style={{ fontWeight: "400", fontSize: "14px", marginBottom: "20px" }}
        >
          When you agree to terms and conditions
        </Text>
        <Text
          style={{ color: "#5d25fa", fontSize: "14px", marginBottom: "20px" }}
        >
          For got your password?
        </Text>
        <Text style={{ marginBottom: "35px" }}>Or login with</Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "50px",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#27538d",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="facebook" size={25} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#1593c5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: "40px", color: "#fff", fontWeight: "700" }}
            >
              Z
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderColor: "#1593c5",
              borderWidth: "2px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="google" size={35} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
