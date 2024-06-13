import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch } from "react-redux";

// redux
import { addBankDetail } from "../redux/features/bankDetailsSlice";

//config
import Colors from "../config/Colors";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";
import TitleFfield from "../components/TitleFfield";

export default function AddSenderBank(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    bic: "",
    iban: "",
    address: "",
    state: "",
    zipcode: "",
    city: "",
    country: "",
  });
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(addBankDetail(formData));
    props.navigation.navigate("PaymetScreen");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          width: "100%",
          height: RFPercentage(13),
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainHeader
            imageSource={icons.arrowleft}
            title="Add Sender Bank"
            onpress={() => {
              props.navigation.navigate("PaymetScreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>
      <View style={{ marginTop: RFPercentage(1.5) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: RFPercentage(3),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: RFPercentage(0.5),
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <TitleFfield
              title="First Name"
              subtitle="e.g Jhon"
              keyboardType="default"
              value={formData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
          </View>
          <View style={{ width: "50%", marginLeft: RFPercentage(2) }}>
            <TitleFfield
              title="Last Name"
              subtitle="e.g Snow"
              keyboardType="default"
              value={formData.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
            />
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Phone Number"
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
          value={formData.phoneNumber}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
        />

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Bank Name "
          subtitle="e.g Capital one"
          keyboardType="default"
          value={formData.bankName}
          onChangeText={(text) => handleInputChange("bankName", text)}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Account Number"
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
          value={formData.accountNumber}
          onChangeText={(text) => handleInputChange("accountNumber", text)}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Routing Number"
          subtitle="e.g 1111-111-11-111"
          keyboardType="numeric"
          value={formData.routingNumber}
          onChangeText={(text) => handleInputChange("routingNumber", text)}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="BIC"
          subtitle="e.g 000-000-00-220-11"
          keyboardType="numeric"
          value={formData.bic}
          onChangeText={(text) => handleInputChange("bic", text)}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="IBAN"
          subtitle="e.g US01UNIL222233434"
          keyboardType="default"
          value={formData.iban}
          onChangeText={(text) => handleInputChange("iban", text)}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title="Address"
          subtitle="e.g street no 3, Amilio, Washington D.C, USA"
          keyboardType="default"
          value={formData.address}
          onChangeText={(text) => handleInputChange("address", text)}
        />

        {/* double fields */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: RFPercentage(0.5),
            alignItems: "center",
          }}
        >
          <View style={{ width: "55%" }}>
            <TitleFfield
              title="State"
              subtitle="e.g Texas"
              keyboardType="default"
              value={formData.state}
              onChangeText={(text) => handleInputChange("state", text)}
            />
          </View>
          <View style={{ width: "45%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title="Zipcode"
              subtitle="e.g 100984"
              keyboardType="numeric"
              value={formData.zipcode}
              onChangeText={(text) => handleInputChange("zipcode", text)}
            />
          </View>
        </View>

        {/* double fields */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: RFPercentage(0.5),
            alignItems: "center",
          }}
        >
          <View style={{ width: "45%" }}>
            <TitleFfield
              title="City"
              subtitle="e.g Illonois"
              keyboardType="default"
              value={formData.city}
              onChangeText={(text) => handleInputChange("city", text)}
            />
          </View>
          <View style={{ width: "55%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title="Country"
              subtitle="e.g USA"
              keyboardType="default"
              value={formData.country}
              onChangeText={(text) => handleInputChange("country", text)}
            />
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleSubmit}
        >
          <AppButton title="Confirm" buttonColor={Colors.secondary} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});
