import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';


type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

const SignupScreen = () => {
  // state to track whether user is on OTP screen
  const [isOTP, setIsOTP] = useState(false);
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleVerifyPress = () => {
    if (!isOTP && mobile.length === 10) {
      setIsOTP(true); // show OTP screen after clicking verify
    } else if (!isOTP) {
      Alert.alert('Error', 'Please enter a valid mobile number');
    } else {
      // OTP verification logic
      Alert.alert('Success', 'OTP Verified!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Signin'),
        },
      ]);
    }
  };

  const handleGuestPress = () => {
    navigation.navigate('Signin'); 
  };


  return (
    <View style={styles.container}>
      {/* ===== Header Section ===== */}
      <Image
        source={require('../assets/signupHeader.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      {/* ===== Truck and Decorative Images ===== */}
      <Image
        source={require('../assets/signuptruck.png')}
        style={styles.truckImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/rectangle.png')}
        style={styles.rectangleImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/Layer 1.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/signup.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      {/* ===== Info Cards ===== */}
      <View style={styles.leftCard}>
        <Image
          source={require('../assets/signupgroup.png')}
          style={styles.leftCardIcon}
          resizeMode="contain"
        />
        <Text style={styles.roleLabelLeft}>Driver/Partner</Text>
      </View>

      <View style={styles.rightCard}>
        <Image
          source={require('../assets/signupgroup2.png')}
          style={styles.rightCardIcon}
          resizeMode="contain"
        />
        <Text style={styles.roleLabelRight}>Service Partner</Text>
      </View>

      {/* ===== Mobile / OTP Section ===== */}
      <Text style={styles.mobileTitle}>
        {isOTP ? 'Verify Your Phone Number' : 'Enter your Mobile number'}
      </Text>
      <Text style={styles.mobileSubtitle}>
        {isOTP
          ? `Enter the OTP sent to +91 ${mobile || '9999 999 999'}`
          : 'Enter your mobile number to verify OTP.'}
      </Text>

      {!isOTP && (
        <TextInput
          style={styles.mobileInput}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
          value={mobile}
          onChangeText={setMobile}
        />
      )}

      {isOTP && (
        <TextInput
          style={styles.mobileInput}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          placeholderTextColor="#999"
        />
      )}

      {/* ===== Verify OTP Button ===== */}
      <LinearGradient
        colors={['#047DC3', '#005381']}
        start={{ x: 0.13, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.verifyButtonGradient}
      >
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerifyPress}
        >
          <Text style={styles.verifyButtonText}>
            {isOTP ? 'Verify OTP' : 'Send OTP'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* ===== Guest Button ===== */}
      <LinearGradient
        colors={['#047DC3', '#005381']}
        start={{ x: 0.13, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.guestButtonBorder}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.guestButton}
          onPress={handleGuestPress} 
        >
          <Text style={styles.guestButtonText}>Use as a Guest</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 402,
    height: 874,
    backgroundColor: '#fff',
  },

  /** ===== Header Section ===== */
  headerImage: {
    position: 'absolute',
    width: 405,
    height: 199,
    top: -30,
    left: -1,
    borderBottomWidth: 4,
    borderBottomColor: '#047DC3',
  },

  /** ===== Decorative Images ===== */
  truckImage: {
    position: 'absolute',
    width: 55,
    height: 55,
    top: 121,
    left: 160,
  },
  rectangleImage: {
    position: 'absolute',
    width: 123,
    height: 67,
    top: 136,
    left: 23,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    position: 'absolute',
    width: 105,
    height: 40.37,
    top: 145,
    left: 32,
  },
  backgroundImage: {
    position: 'absolute',
    width: 326,
    height: 326,
    top: 185,
    left: 38,
  },

  /** ===== Info Cards ===== */
  leftCard: {
    position: 'absolute',
    top: 483,
    left: 23,
    width: 157,
    height: 95,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#2B6DC8',
    backgroundColor: '#CEF4FF',
    alignItems: 'flex-start', // left-align for icon offset
    paddingTop: 0, // top padding not needed because icon uses absolute
    shadowColor: '#979797',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12.5,
    elevation: 5,
  },
  rightCard: {
    position: 'absolute',
    top: 483,
    left: 211,
    width: 157,
    height: 95,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#60BE66',
    backgroundColor: '#DDFFED',
    alignItems: 'flex-start',
    paddingTop: 0,
    shadowColor: '#979797',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12.5,
    elevation: 5,
  },

  leftCardIcon: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: -10,
    top: -15,
  },
  rightCardIcon: {
    width: 85,
    height: 85,
    position: 'absolute',
    left: -10,
    top: -15,
  },

  roleLabelLeft: {
    position: 'absolute',
    bottom: 5, // position text at bottom inside card
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 14,
    color: '#2C2D5B',
  },
  roleLabelRight: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 14,
    color: '#2C2D5B',
  },
  /** ===== Mobile Input Section ===== */
  mobileTitle: {
    position: 'absolute',
    top: 599,
    left: 23,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    color: '#353535',
    textTransform: 'capitalize',
  },
  mobileSubtitle: {
    position: 'absolute',
    top: 634,
    left: 23,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  mobileInput: {
    position: 'absolute',
    top: 662,
    left: 23,
    width: 345,
    height: 52,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  /** ===== Verify OTP Button ===== */
  verifyButtonGradient: {
    position: 'absolute',
    top: 738,
    left: 20,
    width: 345,
    height: 56,
    borderRadius: 6,
  },
  verifyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  /** ===== Guest Button ===== */
  guestButtonBorder: {
    position: 'absolute',
    top: 805,
    left: 20,
    width: 345,
    height: 56,
    borderRadius: 6,
    padding: 1,
  },
  guestButton: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guestButtonText: {
    color: '#047DC3',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignupScreen;
