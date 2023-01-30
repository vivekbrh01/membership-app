import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './ButtonBlueBg.styles';
import commonStyles from '../../utils/common.styles';

export default function ButtonBlueBg(props) {
  const {
    bgBlue,
    flexRow,
    alignCenter,
    justifyCenter,
    borderRadius8,
    pt16,
    p12,
    mrAuto,
    mlAuto,
  } = commonStyles;
  return (
    <TouchableOpacity style={[styles.addMoreBtn, pt16, mrAuto, mlAuto]}>
      <View
        style={[
          flexRow,
          alignCenter,
          justifyCenter,
          bgBlue,
          borderRadius8,
          p12,
        ]}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
}
