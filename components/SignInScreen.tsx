import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const cardsData = [
  {
    id: 1,
    icon: require('../assets/cardIcon1.png'),
    title: 'Your Trusted Logistics Marketplace.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cursus lectus vel facilisis curabitur pellent.',
  },
  {
    id: 2,
    icon: require('../assets/cardIcon1.png'),
    title: 'Fast & Reliable Delivery',
    description:
      'Quick delivery with real-time tracking for all your shipments.',
  },
  {
    id: 3,
    icon: require('../assets/cardIcon1.png'),
    title: 'Seamless Logistics Management',
    description: 'Manage shipments, drivers, and deliveries all in one place.',
  },
];

const CARD_WIDTH = width * 0.75;
const CARD_MARGIN = 10;

const SignInScreen = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % cardsData.length;
        scrollRef.current?.scrollTo({
          x: nextIndex * (CARD_WIDTH + CARD_MARGIN * 2),
          animated: true,
        });
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
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
        source={require('../assets/Signinlogo.png')}
        style={styles.truckImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/languageIcon.png')}
        style={styles.rectangleImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/bellicon.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/Category.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <Text style={styles.mobileTitle}>
        {'Let’s Explore Services & Product'}
      </Text>

      <Image
        source={require('../assets/signinRectangle.png')}
        style={styles.exampleBox}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/vehicleFinance.png')}
        style={styles.vehicleFinance}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/insurance.png')}
        style={styles.insurance}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/tyresAndSpare.png')}
        style={styles.tyresAndSpare}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/lubricants.png')}
        style={styles.lubricants}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/ancillary.png')}
        style={styles.ancillary}
        resizeMode="contain"
      />

      <View>
        <Image
          source={require('../assets/viewMore.png')}
          style={styles.viewMore}
          resizeMode="contain"
        />
        <Text style={styles.viewMoreText}>View More</Text>
      </View>

      <Image
        source={require('../assets/cardItem.png')}
        style={styles.cardItem}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/cardItem2.png')}
        style={styles.cardItem2}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/cardItem3.png')}
        style={styles.cardItem3}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/cardItem4.png')}
        style={styles.cardItem4}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/menu.png')}
        style={styles.menu}
        resizeMode="contain"
      />
      <Text style={styles.businessPartnersText}>Our Business Partners</Text>

      <View style={styles.partnerRow}>
        <View style={styles.partnerCard}>
          <View style={styles.partnerInner}>
            <Image
              source={require('../assets/jindal.png')}
              style={styles.partnerImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={[styles.partnerCard, { marginLeft: 10 }]}>
          <View style={styles.partnerInner}>
            <Image
              source={require('../assets/petroleum.png')}
              style={styles.partnerImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={[styles.partnerCard, { marginLeft: 10 }]}>
          <View style={styles.partnerInner}>
            <Image
              source={require('../assets/reliance.png')}
              style={styles.partnerImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <Image
        source={require('../assets/Subtract.png')}
        style={styles.Subtract}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/Home.png')}
        style={styles.Home}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/search.png')}
        style={styles.search}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/wallet.png')}
        style={styles.wallet}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/Help.png')}
        style={styles.Help}
        resizeMode="contain"
      />
      <View style={{ marginTop: 355, height: 150 }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: CARD_MARGIN }}
        >
          {cardsData.map(card => (
            <View
              key={card.id}
              style={[
                styles.card,
                {
                  width: CARD_WIDTH,
                  marginHorizontal: CARD_MARGIN,
                  padding: 16,
                  flexDirection: 'row', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}
            >
              {/* Text on the left */}
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={styles.trustedText}>{card.title}</Text>
                <Text style={styles.descriptionText}>{card.description}</Text>
              </View>

              {/* Image on the right */}
              <Image
                source={card.icon}
                style={[styles.cardIcon, { width: 100, height: 100 }]}  
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <Image
        source={require('../assets/search1.png')}
        style={styles.searchBox}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 402,
    height: 918,
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
    width: 83.22100830078125,
    height: 32,
    opacity: 1,
    top: 70,
    left: 57,
  },
  rectangleImage: {
    position: 'absolute',
    width: 34.76311111450195,
    height: 34.76311111450195,
    opacity: 1,
    top: 72,
    left: 301,
  },
  logoImage: {
    position: 'absolute',
    width: 35,
    height: 35,
    opacity: 1,
    top: 72,
    left: 347.24,
  },

  backgroundImage: {
    position: 'absolute',
    width: 24,
    height: 24,
    opacity: 1,
    top: 76,
    left: 20,
  },
  exampleBox: {
    position: 'absolute',
    top: 163,
    left: 28,
    width: 345,
    height: 158,
    opacity: 1,
    // Shadow for iOS
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },

  verticalLine: {
    position: 'absolute',
    top: 242,
    left: 28,
    width: 0.6, // line thickness
    height: 345, // line length
    backgroundColor: '#E8F7FF', // border color equivalent
    opacity: 1,
  },

  vehicleFinance: {
    width: 87,
    height: 64.90234375,
    opacity: 1,
    top: 173.1,
    left: 40,
    position: 'absolute',
  },

  insurance: {
    position: 'absolute',
    width: 55,
    height: 66,
    opacity: 1,
    top: 172,
    left: 173,
  },

  tyresAndSpare: {
    position: 'absolute',
    width: 106,
    height: 66,
    opacity: 1,
    top: 172,
    left: 262,
  },

  lubricants: {
    position: 'absolute',
    width: 67,
    height: 70,
    opacity: 1,
    top: 245,
    left: 52,
  },

  ancillary: {
    position: 'absolute',
    width: 83,
    height: 70,
    opacity: 1,
    top: 245,
    left: 159,
  },

  viewMore: {
    position: 'absolute',
    width: 42,
    height: 42,
    opacity: 1,
    top: 247,
    left: 293,
  },
  viewMoreText: {
    position: 'absolute',
    top: 291,
    left: 285,
    width: 57,
    height: 19,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 18.47,
    letterSpacing: 0,
    color: '#4E4E4E',
    opacity: 1,
  },

  cardItem: {
    position: 'absolute',
    top: 536,
    left: 20,
    width: 176.42,
    height: 74.68,
    opacity: 1,
    // Shadow for iOS
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3.07 },
    shadowOpacity: 1,
    shadowRadius: 3.07,
    // Shadow for Android
    elevation: 3,
  },
  cardItem2: {
    position: 'absolute',
    top: 536,
    left: 204.76,
    width: 176.42,
    height: 74.68,
    opacity: 1,
    // Shadow for iOS
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3.07 },
    shadowOpacity: 1,
    shadowRadius: 3.07,
    // Shadow for Android
    elevation: 3,
  },

  cardItem3: {
    position: 'absolute',
    top: 619.36,
    left: 20,
    width: 176.42,
    height: 74.68,
    opacity: 1,
    // Shadow for iOS
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3.07 },
    shadowOpacity: 1,
    shadowRadius: 3.07,
    // Shadow for Android
    elevation: 3,
  },

  cardItem4: {
    position: 'absolute',
    top: 619.36,
    left: 204.76,
    width: 176.42,
    height: 74.68,
    opacity: 1,
    // Shadow for iOS
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3.07 },
    shadowOpacity: 1,
    shadowRadius: 3.07,
    // Shadow for Android
    elevation: 3,
  },

  businessPartnersText: {
    position: 'absolute',
    top: 723,
    left: 20,
    width: 195,
    height: 22,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontStyle: 'normal', // Semi Bold is handled by fontWeight
    fontSize: 18,
    lineHeight: 22, // approximate to height
    letterSpacing: 0,
    textTransform: 'capitalize',
    color: '#3D3D3D',
    opacity: 1,
  },

  partnerRow: {
    position: 'absolute',
    top: 759,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  partnerCard: {
    width: 121.3,
    height: 54.31,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.83,
    borderColor: '#F5F5F5',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3.07 },
    shadowOpacity: 0.5,
    shadowRadius: 3.07,
    elevation: 3,
  },

  partnerInner: {
    width: 81.6,
    height: 36.54,
    justifyContent: 'center',
    alignItems: 'center',
  },

  partnerImage: {
    width: '100%',
    height: '100%',
  },

  JindalImage: {
    width: '100%',
    height: '100%',
  },
  petroleum: {
    width: '100%',
    height: '100%',
  },
  reliance: {
    width: '100%',
    height: '100%',
  },

  Subtract: {
    position: 'absolute',
    top: 845.73,
    width: 402,
    height: 106.38,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24.55,
    borderTopRightRadius: 24.55,
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  Home: {
    position: 'absolute',
    top: 863.19,
    left: 32.73,
    width: 31,
    height: 40.6,
    opacity: 1,
    marginRight: 6.14,
  },

  search: {
    position: 'absolute',
    top: 863.19,
    left: 101,
    width: 55,
    height: 40.14, // rounded
    opacity: 1,
    // For spacing between icons, use margin or a container
    marginRight: 6.14,
  },

  wallet: {
    position: 'absolute',
    top: 863.19,
    left: 253,
    width: 32,
    height: 40.14, // rounded
    opacity: 1,
    // gap is handled by spacing between icons if needed
  },

  Help: {
    position: 'absolute',
    top: 863.19,
    left: 334,
    width: 24,
    height: 40.14, // rounded
    opacity: 1,
  },

  Cards: {
    position: 'absolute',
    top: 366,
    left: -100,
    width: 610,
    height: 151.36, // rounded
    opacity: 1,
  },
  exampleBox1: {
    width: 295.9,
    height: 127.46,
    opacity: 1,
    position: 'absolute',
    top: 366,
    left: 20,
  },
  cardIcon1: {
    width: 147.95,
    height: 110.24,
    position: 'absolute',
    top: 379.35,
    left: 167.95,
    opacity: 1,
    borderWidth: 2.28,
    borderColor: '#E2FAFF',
    borderRadius: 0, // If no border-radius specified
    transform: [{ rotate: '0deg' }],
  },
  trustedTextContainer: {
    position: 'absolute',
    top: 379.66,
    left: 32.52,
    width: 165.02,
    height: 41,
    // backgroundColor: '#164579',
    opacity: 1,
    justifyContent: 'center', // vertically center text
    alignItems: 'center', // horizontally center text
  },
  trustedText: {
    fontFamily: 'Satoshi', // Make sure this font is linked
    fontWeight: '700', // Bold
    fontStyle: 'normal', // Bold already handled by weight
    fontSize: 15.93,
    lineHeight: 20.49,
    letterSpacing: 0,
    color: '#164579', // Assuming text should contrast with background
    textAlign: 'center',
  },
  descriptionContainer: {
    position: 'absolute',
    top: 422.9,
    left: 32.52,
    width: 146.81,
    height: 41,
    opacity: 1,
    justifyContent: 'center', // vertically center text
  },
  descriptionText: {
    fontFamily: 'Satoshi', // make sure this font is linked in your project
    fontWeight: '400', // Regular
    fontStyle: 'normal', // Regular
    fontSize: 11.38,
    lineHeight: 13.66,
    letterSpacing: 0,
    color: '#5D5D5D', // text color as per your CSS
  },

  searchBox: {
    position: 'absolute',
    top: 74,
    left: 152,
    width: 140,
    height: 31,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },

  menu: {
    position: 'absolute',
    top: 813,
    left: 172.87,
    width: 53.19,
    height: 53.19,
    borderRadius: 26.6,
    backgroundColor: '#047DC3',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    shadowColor: '#D3E1F8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },

  card: {
    borderRadius: 18,
    backgroundColor: '#E2FAFF',
    padding: 16,
    shadowColor: '#3685B11F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4.5,
    elevation: 4,
  },
  cardIcon: {
    width: 150,
    height: 110,
    marginBottom: 10,
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
    top: 127,
    left: 20,
    width: 281,
    height: 22,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0,
    textTransform: 'capitalize',
    color: '#fff',
    opacity: 1,
  },
});

export default SignInScreen;
