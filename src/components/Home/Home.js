import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Home.styles';
import ImageLinks from '../../utils/ImagesLinks';
import MembershipCards from '../MembershipCards';
import {membershipTypes} from '../../utils/enums';

export default function Home({navigation}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMembershipData, setSelectedMembershipData] = useState({});

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  function handleSliderPageChange(pageCount) {
    setCurrentSlide(pageCount);
  }
  function handleProceedBtnPress() {
    setSelectedMembershipData(membershipTypes[currentSlide]);
    navigation.push('OrderConfirmation', {
      selectedMembershipData: selectedMembershipData,
    });
  }
  // console.log(membershipTypes[currentSlide], 'membershipTypes');

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#0C3A67', '#1A2E42', '#202931']}
        useAngle={true}
        angle={139.42}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.linearGradient}>
        <View>
          <ImageBackground
            source={ImageLinks.homeBackground}
            style={styles.backgroundImage}>
            <TouchableOpacity>
              <Image
                source={ImageLinks.backArrowWhite}
                style={styles.backArrowWhite}
              />
            </TouchableOpacity>
            <MembershipCards handleSliderPageChange={handleSliderPageChange} />
            {membershipTypes[currentSlide]?.isCurrent === false && (
              <View style={styles.paymentButton}>
                <View>
                  <Text style={styles.paymentButtonText}>
                    {membershipTypes[currentSlide]?.totalAmount}
                  </Text>
                  <Text style={styles.paymentButtonSubText}>Total amount</Text>
                </View>
                <TouchableOpacity onPress={() => handleProceedBtnPress()}>
                  <View style={styles.proceedPaymentBtn}>
                    <Text style={styles.proceedPaymentBtnText}>Proceed</Text>
                    <Image
                      source={ImageLinks.rightArrowWhite}
                      style={styles.rightArrowWhite}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
}
