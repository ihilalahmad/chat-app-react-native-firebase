import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../config/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const register = () => {
  const [username, setUsername] = useState('HilalAhmad');
  const [email, setEmail] = useState('hilal@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const registerUserInFirebase = async () => {
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log('🚀 ~ registerUserInFirebase ~ user:', user.user.uid);
      await createUserInformation(user);
    } catch (error) {
      console.log('🚀 ~ registerUserInFirebase ~ error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createUserInformation = async (user: UserCredential) => {
    try {
      if (!user || !user.user || !user.user.uid) {
        alert('Invalid user object');
      }
      const { uid } = user.user;
      const docRef = doc(FIRESTORE_DB, `users/${uid}`);
      await setDoc(docRef, {
        username,
        email,
      });
    } catch (error) {
      console.log('🚀 ~ createUserInformation ~ error:', error);
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
        value={username}
        onChangeText={setUsername}
        placeholder='Enter username'
      />
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
      <TouchableOpacity
        style={styles.styleRegisterButton}
        onPress={registerUserInFirebase}
      >
        <Text style={styles.styleButtonText}>Create Free Account</Text>
      </TouchableOpacity>{' '}
    </View>
  );
};

export default register;

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
  styleRegisterButton: {
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
