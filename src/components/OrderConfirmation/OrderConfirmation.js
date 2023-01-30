import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './OrderConfirmation.styles';
import commonStyles from '../../utils/common.styles';
import ImageLinks from '../../utils/ImagesLinks';

import OrderHeader from '../OrderHeader';
import AddedItemsCard from '../AddedItemsCard';
import ButtonBlueBg from '../ButtonBlueBg';
import BillingAddressCard from '../BillingAddressCard';
import BoughtTogether from '../BoughtTogether/BoughtTogether';

export default function OrderConfirmation({navigation}) {
  const {
    neomorphBg,
    neomorphBorder,
    f14,
    fw600,
    fw500,
    colorBlue,
    colorWhite,
    pt30,
    pr20,
    pl20,
    pb20,
    p14,
    pl8,
    mt30,
    mb30,
  } = commonStyles;
  // TODO
  // 5. Add `Pay Now` footer
  // 6. Add `Confirmation modal`

  // DONE
  // 1. use object destructuring to replace `commonStyles.`
  // 2. Move `Added items card start` to new component
  // 3. Move `Billing Address` to new component
  // 4. Create `BoughtTogether section` and render here

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={neomorphBg}>
          <OrderHeader navigation={navigation} />
          <View style={[pt30, pr20, pl20, pb20]}>
            <AddedItemsCard />
            <ButtonBlueBg>
              <Image
                source={ImageLinks.addIconWhite}
                style={styles.addIconWhite}
              />
              <Text style={[f14, fw600, colorWhite, pl8]}>Add More</Text>
            </ButtonBlueBg>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Add a message (optional)"
              defaultValue=""
              style={[
                styles.textArea,
                neomorphBorder,
                neomorphBg,
                p14,
                f14,
                mt30,
                mb30,
                colorBlue,
                fw500,
              ]}
            />
            <BillingAddressCard />
            <BoughtTogether />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
