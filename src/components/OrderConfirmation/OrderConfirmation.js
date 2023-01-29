import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import OrderHeader from '../OrderHeader';
import styles from './OrderConfirmation.styles';
import commonStyles from '../../utils/common.styles';
import ImageLinks from '../../utils/ImagesLinks';
import {addressData} from '../../utils/enums';

export default function OrderConfirmation({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.neomorphBg}>
        <OrderHeader navigation={navigation} />
        <View
          style={[
            commonStyles.pt30,
            commonStyles.pr20,
            commonStyles.pl20,
            commonStyles.pb20,
          ]}>
          <View
            style={[
              commonStyles.neomorphBg,
              commonStyles.neomorphBorder,
              commonStyles.neomorphShadow,
              commonStyles.borderRadius14,
              commonStyles.pt24,
              commonStyles.pb24,
              commonStyles.pl16,
              commonStyles.pr9,
            ]}>
            <View style={[commonStyles.flexRow, commonStyles.justifyBetween]}>
              <Text
                style={[
                  commonStyles.f14,
                  commonStyles.fw500,
                  commonStyles.colorBlue,
                ]}>
                Item(s) added to cart
              </Text>
              <TouchableOpacity style={commonStyles.underlineBlue}>
                <Text
                  style={[
                    commonStyles.f12,
                    commonStyles.fw500,
                    commonStyles.colorBlue,
                  ]}>
                  Clear cart
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                commonStyles.flexRow,
                commonStyles.justifyBetween,
                commonStyles.pt16,
              ]}>
              <Text
                style={[
                  commonStyles.f14,
                  commonStyles.fw500,
                  commonStyles.colorBlue,
                ]}>
                1. Indiassetz Gold
              </Text>
              <Text
                style={[
                  commonStyles.f16,
                  commonStyles.fw500,
                  commonStyles.colorBlue,
                ]}>
                ₹ 1,999
              </Text>
            </View>
            <Text
              style={[
                commonStyles.f11,
                commonStyles.fw500,
                commonStyles.colorLightBlue,
                commonStyles.p8,
                commonStyles.pl12,
              ]}>
              Membership
            </Text>
            <View
              style={[commonStyles.borderTopLightBlue, commonStyles.flex1]}
            />
            <View
              style={[
                commonStyles.flexRow,
                commonStyles.justifyBetween,
                commonStyles.alignCenter,
              ]}>
              <TouchableOpacity>
                <View
                  style={[
                    commonStyles.flexRow,
                    commonStyles.alignCenter,
                    commonStyles.pr16,
                    commonStyles.pl16,
                    commonStyles.pt12,
                  ]}>
                  <Image
                    source={ImageLinks.saveIconBlue}
                    style={styles.saveIconBlue}
                  />
                  <Text style={commonStyles.pl12}>Save item</Text>
                </View>
              </TouchableOpacity>
              <View style={commonStyles.borderRightLightBlue} />

              <TouchableOpacity>
                <View
                  style={[
                    commonStyles.flexRow,
                    commonStyles.alignCenter,
                    commonStyles.pr16,
                    commonStyles.pl16,
                    commonStyles.pt12,
                  ]}>
                  <Image
                    source={ImageLinks.removeIconBlue}
                    style={styles.removeIconBlue}
                  />
                  <Text style={commonStyles.pl12}>Remove item</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.addMoreBtn,
              commonStyles.pt16,
              commonStyles.mrAuto,
              commonStyles.mlAuto,
            ]}>
            <View
              style={[
                commonStyles.flexRow,
                commonStyles.alignCenter,
                commonStyles.justifyCenter,
                commonStyles.bgBlue,
                commonStyles.borderRadius8,
                commonStyles.p12,
              ]}>
              <Image
                source={ImageLinks.addIconWhite}
                style={styles.addIconWhite}
              />
              <Text
                style={[
                  commonStyles.f14,
                  commonStyles.fw600,
                  commonStyles.colorWhite,
                  commonStyles.pl8,
                ]}>
                Add More
              </Text>
            </View>
          </TouchableOpacity>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Add a message (optional)"
            defaultValue=""
            style={[
              styles.textArea,
              commonStyles.neomorphBorder,
              commonStyles.neomorphBg,
              commonStyles.p14,
              commonStyles.f14,
              commonStyles.mt30,
              commonStyles.mb30,
              commonStyles.colorBlue,
              commonStyles.fw500,
            ]}
          />
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.justifyBetween,
              commonStyles.alignCenter,
              commonStyles.pb16,
            ]}>
            <Text
              style={
                (commonStyles.f16, commonStyles.fw500, commonStyles.colorBlue)
              }>
              Billing Address
            </Text>
            <TouchableOpacity>
              <View style={commonStyles.underlinePurple}>
                <Text
                  style={[
                    commonStyles.f12,
                    commonStyles.fw500,
                    commonStyles.colorPurple,
                  ]}>
                  Edit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.g12,
              commonStyles.alignCenter,
              commonStyles.justifyBetween,
            ]}>
            <TouchableOpacity>
              <View
                style={[
                  styles.addressCard,
                  commonStyles.neomorphBg,
                  commonStyles.neomorphBorderBlue,
                  commonStyles.neomorphShadow,
                  commonStyles.borderRadius14,
                  commonStyles.pt24,
                  commonStyles.pb16,
                  commonStyles.pl9,
                  commonStyles.pr9,
                ]}>
                <Text style={[commonStyles.f14, commonStyles.fw600]}>
                  {addressData.title}
                </Text>
                <View>
                  <Text
                    style={[
                      commonStyles.colorBlue,
                      commonStyles.f12,
                      commonStyles.fw500,
                      commonStyles.pt8,
                    ]}>
                    Location:{' '}
                    <Text style={[commonStyles.w100, commonStyles.opacity50]}>
                      {addressData.locality}
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.addressCard,
                  commonStyles.neomorphBg,
                  commonStyles.neomorphBorder,
                  commonStyles.neomorphShadow,
                  commonStyles.borderRadius14,
                  commonStyles.pt24,
                  commonStyles.pb24,
                  commonStyles.pl16,
                  commonStyles.pr9,
                ]}>
                <View
                  style={[
                    commonStyles.alignCenter,
                    commonStyles.justifyCenter,
                    commonStyles.flex1,
                  ]}>
                  <Image
                    source={ImageLinks.addIconBlue}
                    style={styles.addIconBlue}
                  />
                  <Text
                    style={[
                      commonStyles.f14,
                      commonStyles.fw600,
                      commonStyles.colorBlue,
                      commonStyles.pt16,
                    ]}>
                    Add Address
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
