import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {View, ImageBackground, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Home.styles';
import ImageLinks from '../../utils/ImagesLinks';
import MembershipCards from '../MembershipCards';
import {membershipTypes} from '../../utils/enums';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  function handleSliderPageChange(pageCount) {
    setCurrentPage(pageCount);
  }
  console.log(membershipTypes[currentPage], 'membershipTypes');

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
            <Image
              source={ImageLinks.backArrowWhite}
              style={styles.backArrowWhite}
            />
            <MembershipCards handleSliderPageChange={handleSliderPageChange} />
            {membershipTypes[currentPage]?.isCurrent === false && (
              <View style={styles.paymentButton}>
                <View>
                  <Text style={styles.paymentButtonText}>
                    {membershipTypes[currentPage]?.totalAmount}
                  </Text>
                  <Text style={styles.paymentButtonSubText}>Total amount</Text>
                </View>
                <View style={styles.proceedPaymentBtn}>
                  <Text style={styles.proceedPaymentBtnText}>Proceed</Text>
                  <Image
                    source={ImageLinks.rightArrowWhite}
                    style={styles.rightArrowWhite}
                  />
                </View>
              </View>
            )}
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
}
