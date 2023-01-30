import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import commonStyles from '../../utils/common.styles';
import styles from './BillingAddressCard.styles';
import ImageLinks from '../../utils/ImagesLinks';
import {addressData} from '../../utils/enums';

export default function BillingAddressCard() {
  const [selectAddress, setSelectAddress] = useState(true);
  const {
    neomorphBg,
    neomorphBorder,
    neomorphShadow,
    neomorphBorderBlue,
    w100,
    opacity50,
    flex1,
    flexRow,
    alignCenter,
    justifyBetween,
    justifyCenter,
    g12,
    borderRadius14,
    f16,
    f14,
    f12,
    fw600,
    fw500,
    colorBlue,
    colorPurple,
    underlinePurple,
    pt24,
    pb24,
    pt22,
    pt16,
    pb16,
    pl16,
    pr9,
    pl9,
    pt8,
  } = commonStyles;
  return (
    <View>
      <View style={[flexRow, justifyBetween, alignCenter, pb16]}>
        <Text style={(f16, fw500, colorBlue)}>Billing Address</Text>
        <TouchableOpacity>
          <View style={underlinePurple}>
            <Text style={[f12, fw500, colorPurple]}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[flexRow, g12, alignCenter, justifyBetween]}>
        <TouchableOpacity>
          <View
            style={[
              styles.addressCard,
              neomorphBg,
              neomorphBorderBlue,
              neomorphShadow,
              borderRadius14,
              pt24,
              pb16,
              pl9,
              pr9,
            ]}>
            <Text style={[f14, fw600, colorBlue]}>{addressData.title}</Text>
            <View>
              <Text style={[colorBlue, f12, fw500, pt8]}>
                Location:{' '}
                <Text style={[w100, opacity50]}>{addressData.locality}</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.addressCard,
              neomorphBg,
              neomorphBorder,
              neomorphShadow,
              borderRadius14,
              pt24,
              pb24,
              pl16,
              pr9,
            ]}>
            <View style={[alignCenter, justifyCenter, flex1]}>
              <Image
                source={ImageLinks.addIconBlue}
                style={styles.addIconBlue}
              />
              <Text style={[f14, fw600, colorBlue, pt16]}>Add Address</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setSelectAddress(!selectAddress)}>
        <View style={[pt22, flexRow, alignCenter]}>
          <View style={styles.checkBoxBlue}>
            {selectAddress === true && (
              <Image
                source={ImageLinks.checkIconBlue}
                style={styles.checkIconBlue}
              />
            )}
          </View>
          <Text style={[f12, fw500, colorBlue]}>
            Set this as your default billing address ?
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
