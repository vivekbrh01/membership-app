import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './AddedItemsCard.styles.';
import commonStyles from '../../utils/common.styles';
import ImageLinks from '../../utils/ImagesLinks';

export default function AddedItemsCard() {
  const {
    neomorphBg,
    neomorphBorder,
    neomorphShadow,
    flex1,
    flexRow,
    alignCenter,
    justifyBetween,
    borderRadius14,
    borderTopLightBlue,
    borderRightLightBlue,
    f16,
    f14,
    f12,
    fw500,
    colorBlue,
    colorLightBlue,
    underlineBlue,
    pt24,
    pb24,
    pt16,
    pr16,
    pl16,
    pt12,
    pl12,
    pr9,
    p8,
  } = commonStyles;
  return (
    <View
      style={[
        neomorphBg,
        neomorphBorder,
        neomorphShadow,
        borderRadius14,
        pt24,
        pb24,
        pl16,
        pr9,
      ]}>
      <View style={[flexRow, justifyBetween]}>
        <Text style={[f14, fw500, colorBlue]}>Item(s) added to cart</Text>
        <TouchableOpacity style={underlineBlue}>
          <Text style={[f12, fw500, colorBlue]}>Clear cart</Text>
        </TouchableOpacity>
      </View>
      <View style={[flexRow, justifyBetween, pt16]}>
        <Text style={[f14, fw500, colorBlue]}>1. Indiassetz Gold</Text>
        <Text style={[f16, fw500, colorBlue]}>₹ 1,999</Text>
      </View>
      <Text style={[f12, fw500, colorLightBlue, p8, pl12]}>Membership</Text>
      <View style={[borderTopLightBlue, flex1]} />
      <View style={[flexRow, justifyBetween, alignCenter]}>
        <TouchableOpacity>
          <View style={[flexRow, alignCenter, pr16, pl16, pt12]}>
            <Image
              source={ImageLinks.saveIconBlue}
              style={styles.saveIconBlue}
            />
            <Text style={pl12}>Save item</Text>
          </View>
        </TouchableOpacity>
        <View style={borderRightLightBlue} />

        <TouchableOpacity>
          <View style={[flexRow, alignCenter, pr16, pl16, pt12]}>
            <Image
              source={ImageLinks.removeIconBlue}
              style={styles.removeIconBlue}
            />
            <Text style={pl12}>Remove item</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
