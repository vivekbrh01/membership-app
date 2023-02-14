import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import commonStyles from '../../utils/common.styles';
import BoughtTogetherSlider from './BoughtTogetherSlider';

export default function BoughtTogether() {
  const {
    flexRow,
    alignCenter,
    justifyBetween,
    f16,
    f12,
    f11,
    fw600,
    fw500,
    colorBlue,
    colorPurple,
    underlinePurple,
    pt30,
    pt8,
  } = commonStyles;

  return (
    <View style={pt30}>
      <View style={[flexRow, justifyBetween, alignCenter, pt8]}>
        <Text style={[f16, fw600, colorBlue]}>Frequently bought together</Text>
        <TouchableOpacity>
          <View style={underlinePurple}>
            <Text style={[f12, fw500, colorPurple]}>View all</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[f11, colorBlue, pt8]}>
        People who have ordered this also added these services
      </Text>
      <BoughtTogetherSlider />
    </View>
  );
}
