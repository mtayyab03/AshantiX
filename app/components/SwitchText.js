import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function SwitchText({ title }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: RFPercentage(1),
        padding: RFPercentage(2),
        backgroundColor: Colors.white,
        borderWidth: RFPercentage(0.1),
        borderRadius: RFPercentage(1.5),
        borderColor: Colors.stroke,
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.regular,
          fontSize: RFPercentage(1.7),
          color: Colors.blacky,
        }}
      >
        {title}
      </Text>
      <View style={{ position: "absolute", right: RFPercentage(1) }}>
        <Switch
          trackColor={{ false: Colors.darkgrey, true: Colors.secondary }}
          thumbColor={isEnabled ? Colors.white : Colors.white}
          ios_backgroundColor={Colors.lightgrey}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});
