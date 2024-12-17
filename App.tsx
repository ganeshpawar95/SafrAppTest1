import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import HomeScreen from "./app/HomeScreen";
import { NativeBaseProvider, Box } from "native-base";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <HomeScreen />
        <Toast />
      </NativeBaseProvider>
    </Provider>
  );
}
