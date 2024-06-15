import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import icons from "../config/icons";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setRecipientDetails } from "../redux/features/recipientSlice";
import i18n from "../../i18n";

//Components
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";
import TitleFfield from "../components/TitleFfield";

export default function AddBankRecepient(props) {
  const dispatch = useDispatch();
  const transferType1 = useSelector((state) => state.transfer.transferType1);
  const transferType2 = useSelector((state) => state.transfer.transferType2);
  const locale = useSelector((state) => state.language);
  i18n.locale = locale;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bic, setBic] = useState("");
  const [iban, setIban] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleConfirm = () => {
    const recipientDetails = {
      firstName,
      lastName,
      phoneNumber,
      bankName,
      accountNumber,
      routingNumber,
      bic,
      iban,
      address,
      state,
      zipcode,
      city,
      country,
    };
    dispatch(setRecipientDetails(recipientDetails));
    props.navigation.navigate("ConfirmPayment");
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
            title="Add Bank Recipient"
            onpress={() => {
              props.navigation.navigate("AddRecepientScreen", {
                transferType1,
                transferType2,
              });
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
              title={i18n.t("name")}
              subtitle="e.g Jhon"
              keyboardType="default"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={{ width: "50%", marginLeft: RFPercentage(2) }}>
            <TitleFfield
              title="Last Name"
              subtitle="e.g Snow"
              keyboardType="default"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("phone_number")}
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("bank_name")}
          subtitle="e.g Capital one"
          keyboardType="default"
          value={bankName}
          onChangeText={setBankName}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("account_number")}
          subtitle="e.g 001-345-12312"
          keyboardType="numeric"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("routing_number")}
          subtitle="e.g 1111-111-11-111"
          keyboardType="numeric"
          value={routingNumber}
          onChangeText={setRoutingNumber}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("bic")}
          subtitle="e.g 000-000-00-220-11"
          keyboardType="numeric"
          value={bic}
          onChangeText={setBic}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("iban")}
          subtitle="e.g US01UNIL222233434"
          keyboardType="default"
          value={iban}
          onChangeText={setIban}
        />
        <View style={{ marginTop: RFPercentage(0.5) }} />
        <TitleFfield
          title={i18n.t("address")}
          subtitle="e.g street no 3, Amilio, Washington D.C, USA"
          keyboardType="default"
          value={address}
          onChangeText={setAddress}
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
              title={i18n.t("state")}
              subtitle="e.g Texas"
              keyboardType="default"
              value={state}
              onChangeText={setState}
            />
          </View>
          <View style={{ width: "45%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title={i18n.t("zipcode")}
              subtitle="e.g 100984"
              keyboardType="numeric"
              value={zipcode}
              onChangeText={setZipcode}
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
              title={i18n.t("city")}
              subtitle="e.g Illonois"
              keyboardType="default"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={{ width: "55%", marginLeft: RFPercentage(1) }}>
            <TitleFfield
              title={i18n.t("country")}
              subtitle="e.g USA"
              keyboardType="default"
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleConfirm}
        >
          <AppButton title={i18n.t("confirm")} buttonColor={Colors.secondary} />
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
