import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from "react";
import * as Font from 'react-native';
import PlusJakartaSansRegular from './assets/fonts/static/PlusJakartaSans-Regular.ttf';
import SplashScreen from "./screens/OnboardingWithoutKyc/SplashScreen";
import HomeScreen from './screens/OnboardingWithoutKyc/HomeScreen'
import CreatePin from "./screens/OnboardingWithoutKyc/CreatePin";
import LandingPage from "./screens/OnboardingWithoutKyc/LandingPage";
import GeoLocationScreen from "./screens/OnboardingWithoutKyc/GeoLocationScreen";
import LocationScreen from "./screens/OnboardingWithoutKyc/LocationScreen";
import PersonalInfoScreen from "./screens/OnboardingWithoutKyc/PersonalInfoScreen";
import OtpScreen from "./screens/OnboardingWithoutKyc/OtpScreen";
import RecoveryPhaseScreen from "./screens/OnboardingWithoutKyc/RecoveryPhaseScreen";
import BackUpScreen from "./screens/OnboardingWithoutKyc/BackUpScreen";
import WalletAnimationScreen from "./screens/OnboardingWithoutKyc/WalletAnimationScreen";
import LoaderScreen from "./screens/WalletDetails/LoaderScreen";
import WalletWithCards from "./screens/WalletDetails/WalletWithCards";
import VCDetails from "./screens/WalletDetails/VCDetails";
import SelectSchemaScreen from "./screens/WalletDetails/SelectSchemaScreen";
import SelectedSchema from "./screens/WalletDetails/SelectedSchema";
import ContactPage from "./screens/ContactScreens/ContactPage";
import QRScreen from "./screens/ContactScreens/QRScreen";
import AcceptDeclineScreen from './screens/ContactScreens/AcceptDeclineScreen';
import ChatScreen from "./screens/ContactScreens/ChatScreen";
import Settings from "./screens/SettingsScreens/Settings";
import SupportScreen from "./screens/SettingsScreens/SupportScreen";
import Networks from "./screens/SettingsScreens/Networks";
import RecoverWalletScreen from "./screens/RecoverWallet/RecoverWalletScreen";
import RestoreCredentials from "./screens/RecoverWallet/RestoreCredentials"
import Recover from "./screens/RecoverWallet/Recover";
import ErrorScreen from "./screens/RecoverWallet/ErrorScreen";


const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'PlusJakartaSans-Regular': PlusJakartaSansRegular,
        // Add more fonts as needed
      });
    };

    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="GeoLocationScreen" component={GeoLocationScreen} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="RecoveryPhaseScreen" component={RecoveryPhaseScreen} />
        <Stack.Screen name="BackUpScreen" component={BackUpScreen} />
        <Stack.Screen name="WalletAnimationScreen" component={WalletAnimationScreen} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="RecoverWalletScreen" component={RecoverWalletScreen} />
        <Stack.Screen name="RestoreCredentials" component={RestoreCredentials} />
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
        <Stack.Screen name="WalletWithCards" component={WalletWithCards} />
        <Stack.Screen name="VCDetails" component={VCDetails} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
        <Stack.Screen name="AcceptDeclineScreen" component={AcceptDeclineScreen} />
        <Stack.Screen name="SelectedSchema" component={SelectedSchema} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="SelectSchemaScreen" component={SelectSchemaScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="Networks" component={Networks} />
      </Stack.Navigator>
    </NavigationContainer >

  );
};

export default App;