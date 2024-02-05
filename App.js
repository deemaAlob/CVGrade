import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const App = () => {
  const [fileName, setFileName] = useState('');
  const [email, setEmail] = useState(''); // Declare the email state here
  const [error, setError] = useState(''); // Declare the error state here
//sdfgd

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFileName(result.uri.split('/').pop()); // Extract filename from URI
      }
    } catch (error) {
      console.error(error);
    }
  };
    const handleEmailChange = (text) => {
    setEmail(text);
    setError(''); // Clear error on input change
  };

    // Handle email submission (replace with your authentication logic)
     const handleSubmit = async () => {
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Store email or send to server (replace with your implementation)
    try {
      // Example: Store email locally
      // await AsyncStorage.setItem('userEmail', email);
      console.log('File:', fileName);
      console.log('Email:', email);

      // Handle success (e.g., show confirmation message)
     } catch (error) {
      console.error(error);
      setError('An error occurred during submission. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/Background3.jpeg')}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={require('./assets/Center3.png')} style={styles.centerImage} />
        <Text style={styles.CenterText}>Let's work together to make {'\n'} your <Text style={styles.CenterText2}>CV</Text> stand out!</Text>
        <Image
          source={require('./assets/CV-LOGO.png')}
          style={styles.logoImage}
        />

        <Text style={styles.EmailText}>Email:</Text>
         <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          onChangeText={handleEmailChange}
          value={email}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity onPress={handleSubmit} style={styles.SubmitButton}>
      <Text style={styles.SubmitButtonText}>Submit</Text>
    </TouchableOpacity>
        <TouchableOpacity onPress={handleUpload} style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload File</Text>
        </TouchableOpacity>
        {fileName && <Text style={styles.fileNameText}>{fileName}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around', // Adjusted for better vertical spacing
    alignItems: 'center',
  },
  centerImage: {
    width: 350,
    height: 350,
    bottom: -120,
    resizeMode: 'contain',
  },
  logoImage: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  uploadButton: {
    backgroundColor: 'rgb(28,180,60)',
    borderRadius: 50,
    width: 120,
    height: 50,
    top: -180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fileNameText: {
    borderRadius: 50,
    width: 120,
    height: 50,
    top: -300,
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CenterText: {
   justifyContent: 'center',
   bottom: -50,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 22,
    resizeMode: 'contain',
    textAlign: 'center',
  },
  CenterText2: {
    color: 'rgb(28,180,60)',
  },
SubmitButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
},
SubmitButton: {
    backgroundColor: 'rgba(192,231,201,255)',
    borderRadius: 50,
    width: 210,
    height: 50,
    bottom: -12,
    justifyContent: 'center',
    alignItems: 'center',
},
emailInput: {
   width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: 'rgb(28,180,60)', // Set border color to green
      padding: 10,
      top: -30,
      marginBottom: 10,
},
EmailText: {
  color: 'rgb(28,180,60)',
  justifyContent: 'center',
   bottom: -20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 12,
    resizeMode: 'contain',
    textAlign: 'center',
},
});

export default App;
