import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProfileNavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearchPress = () => {
    Alert.alert("Search Pressed", "Fitur pencarian akan ditampilkan di sini.");
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={handleSearchPress}>
        <Feather name="search" size={20} color="#007AFF" />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity style={styles.iconButton} onPress={toggleMenu}>
        <Feather name="menu" size={24} color="#007AFF" />
      </TouchableOpacity>
      {menuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Menu 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Pengaturan</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  text: {
    fontSize: 18,
    color: "#333",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  iconButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#e0f7fa",
    marginHorizontal: 5,
    elevation: 2,
  },
  menuContainer: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  menuButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    marginVertical: 5,
  },
  menuText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
