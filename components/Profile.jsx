import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  const user = {
    name: "John Doe",
    username: "@johndoe",
    email: "johndoe@example.com",
    image: "https://via.placeholder.com/100",
  };

  return (
    <View style={[styles.container, styles.drawerLabelContainer]}>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
}

// Styles for Profile Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 5,
  },
  drawerLabelContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    color: "#555",
  },
  email: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
});
