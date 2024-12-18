import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import ProfileScreen from "./src/pages/profile";
import Constants from "expo-constants";
import Lifecycle from "./src/components/lifecycle/index";
import { useState } from "react";

export default function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ProfileScreen />
      {showLifecycle && <Lifecycle />}
      <Button
        title="Toggle Lifecycle Component"
        onPress={() => setShowLifecycle(!showLifecycle)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});