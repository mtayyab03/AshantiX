import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import i18n from "../../i18n";

// redux
import { setLanguage } from "../redux/features/languageSlice";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language);
  const [dropdown1, setDropdown1] = useState(false);
  const [selectedTransferType1, setSelectedTransferType1] = useState(null);
  const [eyeIcon, setEyeIcon] = useState(false);
  const transferLanguage = [
    {
      id: 1,
      name: "English",
      lang: "en",
    },
    {
      id: 2,
      name: "Franch",
      lang: "fr",
    },
    {
      id: 3,
      name: "German",
      lang: "de",
    },
    {
      id: 4,
      name: "Spanish",
      lang: "sp",
    },
  ];

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    i18n.locale = language;
  };
  let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <View style={{ padding: RFPercentage(1) }}>
          <View style={styles.dropdownToggle}>
            <Text style={styles.buttonText}>
              {selectedTransferType1 ? selectedTransferType1.name : "English"}
            </Text>

            {dropdown1 ? (
              <TouchableOpacity onPress={() => setDropdown1(false)}>
                <Entypo name="chevron-up" color={Colors.white} size={22} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setDropdown1(true)}>
                <Entypo name="chevron-down" color={Colors.white} size={22} />
              </TouchableOpacity>
            )}
          </View>

          {dropdown1 && (
            <View style={styles.dropdown}>
              {transferLanguage.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    handleLanguageChange(item.lang);
                    setSelectedTransferType1(item);
                    setDropdown1(false);
                  }}
                >
                  <Text style={styles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
      {/* <View style={{ flexDirection: "row" }}>
        <Button title="English" onPress={() => handleLanguageChange("en")} />
        <Button title="French" onPress={() => handleLanguageChange("fr")} />
        <Button title="German" onPress={() => handleLanguageChange("de")} />
        <Button title="Italian" onPress={() => handleLanguageChange("it")} />
      </View> */}
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={icons.mainlogo} />
      </View>

      {/* login text */}

      <View style={{ width: "90%", marginTop: RFPercentage(5) }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
          }}
        >
          {i18n.t("login")}
        </Text>
      </View>

      {/* //email input */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.inputmaincontainer}>
              <View style={styles.emailmain}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  // value={text}
                  placeholder={i18n.t("email")}
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              <View style={{ width: "90%" }}>
                {touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.passwordmain}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  // value={Password}
                  placeholder={i18n.t("password")}
                  placeholderTextColor={Colors.placeholder}
                  secureTextEntry={true && !eyeIcon}
                />
                <TouchableOpacity
                  onPress={() => setEyeIcon(!eyeIcon)}
                  activeOpacity={0.7}
                  style={styles.eyeicon}
                >
                  <MaterialCommunityIcons
                    color={Colors.grey}
                    style={{ right: RFPercentage(1) }}
                    size={RFPercentage(3)}
                    name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "90%" }}>
                {touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
            </View>

            {/* forget password */}
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("ForgetMailScreen");
                }}
                activeOpacity={0.7}
                style={styles.forgotPasswordButton}
              >
                <Text style={styles.forgotPasswordText}>
                  {i18n.t("forget_password")}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginbutton}
              activeOpacity={0.7}
              onPress={handleSubmit}
            >
              <AppButton title={i18n.t("login")} buttonColor={Colors.primary} />
            </TouchableOpacity>
          </>
        )}
      </Formik>

      {/* Signup */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: RFPercentage(5),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(1.5),
          }}
        >
          {i18n.t("dont_account")} ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignUpScreen");
          }}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: Colors.secondary,
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(1.5),
            }}
          >
            {i18n.t("signup")}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(5),
  },
  logo: {
    width: RFPercentage(13),
    height: RFPercentage(13),
  },
  inputmaincontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  emailmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    color: Colors.blacky,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
  },
  input: { fontFamily: FontFamily.regular },

  passwordmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.white,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    color: Colors.blacky,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1.5),
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },

  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2.5),
  },

  forgotPasswordButton: {
    marginTop: RFPercentage(1),
    position: "absolute",
    right: RFPercentage(2),
  },
  forgotPasswordText: {
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1.4),
  },
  dropdownToggle: {
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    flexDirection: "row",
  },
  dropdown: {
    position: "relative",
    zIndex: 1,
    backgroundColor: Colors.fieldcolor,
    width: "100%",
    padding: RFPercentage(1),
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  buttonText: {
    color: Colors.white,
    fontSize: RFPercentage(1.3),
    fontFamily: FontFamily.semiBold,
  },
  dropdownIcon: {
    width: RFPercentage(2),
    height: RFPercentage(2),
  },
  dropdownText: {
    marginLeft: RFPercentage(1),
    fontFamily: FontFamily.regular,
    fontSize: RFPercentage(1),
    color: Colors.grey,
  },
});
