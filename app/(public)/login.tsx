import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../config/FirebaseConfig';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      alert(`Logged in successfully: ${user.user.email}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.styleMainContainer}>
      <Spinner visible={loading} />
      <TextInput
        style={styles.styleTextInput}
        value={email}
        onChangeText={setEmail}
        placeholder='Enter email'
      />
      <TextInput
        style={styles.styleTextInput}
        value={password}
        onChangeText={setPassword}
        placeholder='Enter password'
        secureTextEntry
      />
      <TouchableOpacity style={styles.styleLoginButton} onPress={loginUser}>
        <Text style={styles.styleButtonText}>Login</Text>
      </TouchableOpacity>
      <Text>Don't have account</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  styleMainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  styleTextInput: {
    marginVertical: 4,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 50,
  },
  styleLoginButton: {
    marginTop: 16,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  styleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
