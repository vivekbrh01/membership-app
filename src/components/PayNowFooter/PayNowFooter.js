import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import ImageLinks from '../../utils/ImagesLinks';
import commonStyles from '../../utils/common.styles';
import styles from './PayNowFooter.styles';

export default function PayNowFooter({setShowModal, selectedMembershipData}) {
  const {
    bgBlue,
    bgWhite,
    flexRow,
    alignCenter,
    justifyBetween,
    justifyCenter,
    borderRadius14,
    f16,
    f12,
    fw600,
    colorBlue,
    colorWhite,
    pr30,
    pl30,
    p20,
    pt12,
    pb12,
    pr12,
    pr8,
    pl8,
  } = commonStyles;

  return (
    <View style={[bgBlue, p20, flexRow, alignCenter, justifyBetween]}>
      <View>
        <Text style={[f16, fw600, colorWhite]}>
          {selectedMembershipData?.totalAmount}
        </Text>
        <Text style={[f12, fw600, colorWhite]}>Total amount</Text>
      </View>
      <TouchableOpacity
        style={[
          bgWhite,
          flexRow,
          alignCenter,
          justifyCenter,
          pl30,
          pr30,
          pt12,
          pb12,
          borderRadius14,
        ]}
        onPress={() => setShowModal(true)}>
        <Text style={[f16, fw600, colorBlue, pl8, pr12]}>Pay Now</Text>
        <Image
          source={ImageLinks.rightArrowBlue}
          style={[pr8, styles.rightArrowBlue]}
        />
      </TouchableOpacity>
    </View>
  );
}
