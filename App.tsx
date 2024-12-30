import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '265274621631-ql2qs1pm2nhp1qdvlhghrndaklj0tnpn.apps.googleusercontent.com', // Replace with your actual webClientId
});

const GoogleSignIn = () => {
  // State to store user info
  const [userInfo, setUserInfo] = useState({
    photo: 'https://via.placeholder.com/100', // Placeholder photo
    name: 'Placeholder Name', // Placeholder name
    email: 'placeholder@example.com', // Placeholder email
    id: 'Placeholder ID', // Placeholder ID
  });

  // Function to handle Google Sign-In
  const onGoogleButtonPress = async () => {
    try {
      // Initiate Google Sign-In
      const signInResult = await GoogleSignin.signIn();

      // Log the entire response for inspection
      console.log('SignInResult:', JSON.stringify(signInResult, null, 2));

      // Extract data from `signInResult.data`
      const user = signInResult?.data?.user || {};
      const idToken = signInResult?.data?.idToken;

      // Update state with user information
      setUserInfo({
        photo: user.photo || 'https://via.placeholder.com/100',
        name: user.name || 'No Name',
        email: user.email || 'No Email',
        id: user.id || 'No ID',
      });

      // Log additional details if needed
      console.log('ID Token:', idToken);
      console.log('User Details:', user);

    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  // Function to handle Google Sign-Out
  const onGoogleSignOut = async () => {
    try {
      // Revoke access and sign out
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      // Reset user info to placeholders
      setUserInfo({
        photo: 'https://via.placeholder.com/100',
        name: 'Placeholder Name',
        email: 'placeholder@example.com',
        id: 'Placeholder ID',
      });

      console.log('Signed out successfully!');
    } catch (error) {
      console.error('Google Sign-Out Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display User Info */}
      <Image source={{ uri: userInfo.photo }} style={styles.image} />
      <Text style={styles.text}>Name: {userInfo.name}</Text>
      <Text style={styles.text}>Email: {userInfo.email}</Text>
      <Text style={styles.text}>ID: {userInfo.id}</Text>

      {/* Buttons */}
      <Button title="Google Sign-In" onPress={onGoogleButtonPress} />
      <Button title="Sign Out" onPress={onGoogleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default GoogleSignIn;
