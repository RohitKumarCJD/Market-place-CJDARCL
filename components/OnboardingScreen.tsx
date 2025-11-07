import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';


type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;
const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('../assets/image 2598.png'),
    text: 'Powered by ',
    highlight: 'CJ Logistics Korea & Darcl India',
    description: ' — delivering smart, reliable logistics across India.',
  },
  {
    id: 2,
    image: require('../assets/image 2578.png'),
    text: 'Your goods, ',
    highlight: 'our priority ',
    description: 'delivered with precision and care.',
  },
  {
    id: 3,
    image: require('../assets/image 2579.png'),
    text: '200+ branches, 6900+ locations, & 1600+ fleet powering ',
    highlight: 'logistics across India ',
    description: '',
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.navigate('Signup'); 
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    Animated.timing(translateX, {
      toValue: -nextIndex * width,
      duration: 600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const handleSkip = () => {
    navigation.navigate('Signup');
  };

  const getImageStyle = (id: number) => {
    switch (id) {
      case 1:
        return { width: 420, height: 236, top: 174, left: -9 };
      case 2:
        return { width: 378, height: 378, top: 135, left: 12 };
      case 3:
        return { width: 360, height: 340, top: 115, left: 20 };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/darcl.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Animated Slides */}
      <Animated.View
        style={[styles.sliderContainer, { transform: [{ translateX }] }]}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={[styles.slide, { width }]}>
            <Image
              source={slide.image}
              style={[styles.mainImage, getImageStyle(slide.id)]}
              resizeMode="contain"
            />
            <Text style={styles.contentText}>
              {slide.text}
              <Text style={styles.highlightText}>{slide.highlight}</Text>
              {slide.description}
            </Text>
          </View>
        ))}
      </Animated.View>

      {/* Next Button */}
      <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
        <Image
          source={require('../assets/Next Button.png')}
          style={styles.gradientImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Progress Indicator */}
      <Image
        source={require('../assets/Sliedbar.png')}
        style={styles.smallImage}
        resizeMode="contain"
      />

      {/* Skip Text */}
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', overflow: 'hidden' },
  logo: { position: 'absolute', width: 105, height: 40.37, top: 72, left: 27 },
  sliderContainer: { flexDirection: 'row', position: 'absolute', top: 0, left: 0 },
  slide: { alignItems: 'center', justifyContent: 'center' },
  mainImage: { position: 'absolute', opacity: 1 },
  contentText: {
    position: 'absolute',
    width: 360,
    height: 225,
    top: 415,
    left: 30,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 45,
    color: '#000',
  },
  highlightText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 45,
    color: '#006ECD',
  },
  gradientImage: {
    position: 'absolute',
    width: 129,
    height: 191,
    top: 683,
    left: 273,
  },
  smallImage: {
    position: 'absolute',
    width: 50,
    height: 8,
    top: 670,
    left: 30,
  },
  skipText: {
    position: 'absolute',
    width: 50,
    height: 20,
    top: 784,
    left: 30,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    color: '#002055',
  },
});

export default OnboardingScreen;
