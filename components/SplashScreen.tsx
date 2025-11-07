import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);  
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Middle Logo */}
      <Image
        source={require('../assets/darcl.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Bottom / Decorative Images */}
      <Image
        source={require('../assets/fill.png')}  
        style={styles.image1}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/fill1.png')}  
        style={styles.image2}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/fill2.png')}  
        style={styles.image3}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/splashGroup.png')}  
        style={styles.image4}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // container background
  },
  logo: {
    position: 'absolute',
    width: 213,
    height: 82,
    top: 283,
    left: 95,
    opacity: 1,
  },
  image1: {
    position: 'absolute',
    width: 482,
    height: 291,
    top: 582,
    left: -40,
    opacity: 1,
  },
  image2: {
    position: 'absolute',
    width: 309,
    height: 187,
    top: 687,
    left: 133,
    opacity: 1,
  },
  image3: {
    position: 'absolute',
    width: 235,
    height: 142,
    top: 731,
    left: -40,
    opacity: 1, 
  },
  image4: {
    position: 'absolute',
    width: 224.6,
    height: 104.9,
    opacity: 1,
    top: 768,
    left: 95.82,
    // borderWidth: 2,
    // borderColor: '#FFFFFF',
  },
});

export default SplashScreen;