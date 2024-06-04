import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux"; // Import useSelector hook

// Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetMailScreen from "../screens/ForgetMailScreen";
import ForgetPwdScreen from "../screens/ForgetPwdScreen";

import EditAccount from "../screens/EditAccount";
import TransferHistory from "../screens/TransferHistory";
import SettingScreen from "../screens/SettingScreen";
import SupportScreen from "../screens/SupportScreen";
import AboutScreen from "../screens/AboutScreen";

import ConvertScreen from "../screens/ConvertScreen";

import AddRecepientScreen from "../screens/AddRecepientScreen";
import AddBankRecepient from "../screens/AddBankRecepient";
import AddCryptoRecepient from "../screens/AddCryptoRecepient";
import AddMoneyRecepient from "../screens/AddMoneyRecepient";
import ConfirmPayment from "../screens/ConfirmPayment";

import SuccessScreen from "../screens/SuccessScreen";
import FailScreen from "../screens/FailScreen";
import QRScanScreen from "../screens/QRScanScreen";

import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function NavigationStack() {
  // const token = useSelector((state) => state.auth.token); // Get token from Redux store

  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName={"BottomTab"}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgetMailScreen" component={ForgetMailScreen} />
      <Stack.Screen name="ForgetPwdScreen" component={ForgetPwdScreen} />

      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name="TransferHistory" component={TransferHistory} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />

      <Stack.Screen name="ConvertScreen" component={ConvertScreen} />
      <Stack.Screen name="AddRecepientScreen" component={AddRecepientScreen} />
      <Stack.Screen name="AddBankRecepient" component={AddBankRecepient} />
      <Stack.Screen name="AddCryptoRecepient" component={AddCryptoRecepient} />
      <Stack.Screen name="AddMoneyRecepient" component={AddMoneyRecepient} />
      <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />

      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="FailScreen" component={FailScreen} />
      <Stack.Screen name="QRScanScreen" component={QRScanScreen} />

      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
