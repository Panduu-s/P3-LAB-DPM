import { ScrollView, StyleSheet, View } from "react-native";
import ProfileNavBar from "../../components/navBarProfile";
import ProfileHeader from "../../components/headerprofil";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileNavBar />
      <ScrollView>
        <ProfileHeader />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
