import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import DrawerNavigator from "./navigations/DrawerNavigator";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  const handleSplashComplete = () => {
    setSplashVisible(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        {splashVisible ? (
          <SplashScreen onSplashComplete={handleSplashComplete} />
        ) : (
          <DrawerNavigator />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
