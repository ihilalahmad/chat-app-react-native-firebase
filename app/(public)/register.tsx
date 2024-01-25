import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../config/FirebaseConfig";

const register = () => {
  const [username, setUsername] = useState("HilalAhmad");
  const [email, setEmail] = useState("hilal@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const registerUserInFirebase = async () => {
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("🚀 ~ registerUserInFirebase ~ user:", user);
    } catch (error) {
      console.log("🚀 ~ registerUserInFirebase ~ error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.styleMainContainer}>
      <Spinner visible={loading} />
      <TextInput
        style={styles.styleTextInput}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <TextInput
        style={styles.styleTextInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
      />
      <TextInput
        style={styles.styleTextInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  styleMainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  styleTextInput: {
    marginVertical: 4,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    height: 50,
  },
  styleLoginButton: {
    margin: 10,
    alignItems: "center",
  },
});
