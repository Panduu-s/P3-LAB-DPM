import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Pandu Sarma</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>UIR</Text>
          <Text style={styles.labelText}>DURI</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
        <Text style={buttonStyles.grayOutlinedButtonText}>Change Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightbluesky",
    backgroundColor: "#f0f8ff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    color: "#333",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
    width: 70,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "gray",
    fontSize: 11,
    fontWeight: "bold",
  },
});
