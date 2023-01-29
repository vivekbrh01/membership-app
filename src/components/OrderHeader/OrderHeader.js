import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import NeoMorphic from '../NeoMorphic';
import ImageLinks from '../../utils/ImagesLinks';
import styles from './OrderHeader.styles';
import commonStyles from '../../utils/common.styles';

export default function OrderHeader({
  headerTitle = '',
  showCart = false,
  navigation,
}) {
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <NeoMorphic
      style={({justifyContent: 'space-between'}, styles.headerNeomorphic)}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.backArrowBlueBtn,
            commonStyles.neomorphBg,
            commonStyles.neomorphBorder,
            commonStyles.neomorphShadow,
          ]}
          onPress={() => handleGoBack()}>
          <Image
            source={ImageLinks.backArrowBlue1}
            style={styles.backArrowBlue}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {headerTitle === 'payment' ? 'Payment' : 'Order Confirmation'}
        </Text>
        <TouchableOpacity
          style={[
            styles.backArrowBlueBtn,
            commonStyles.neomorphBg,
            commonStyles.neomorphBorder,
            commonStyles.neomorphShadow,
            headerTitle === 'payment' ? styles.opacityOne : styles.opacityZero,
          ]}>
          <Image source={ImageLinks.cartBlue} style={styles.backArrowBlue} />
        </TouchableOpacity>
      </View>
    </NeoMorphic>
  );
}
