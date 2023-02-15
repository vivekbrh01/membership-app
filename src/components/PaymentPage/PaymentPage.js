import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';

import commonStyles from '../../utils/common.styles';

import OrderHeader from '../OrderHeader';
import AddedItemsCard from '../AddedItemsCard';
import PayNowFooter from '../PayNowFooter';
import OrderConfirmationModal from '../OrderConfirmationModal';

export default function PaymentPage({navigation, route}) {
  const [showModal, setShowModal] = useState(false);

  const selectedMembershipData = route?.params?.selectedMembershipData;
  const {neomorphBg, pt30, pr20, pl20, pb20} = commonStyles;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={neomorphBg}>
          <OrderHeader
            headerTitle={'payment'}
            showCart={true}
            navigation={navigation}
          />
          <View style={[pt30, pr20, pl20, pb20]}>
            <AddedItemsCard
              selectedMembershipData={selectedMembershipData}
              pageName={'payment'}
            />
          </View>
        </View>
        <View>
          <PayNowFooter
            setShowModal={setShowModal}
            selectedMembershipData={selectedMembershipData}
          />
        </View>
        <OrderConfirmationModal
          setShowModal={setShowModal}
          showModal={showModal}
          selectedMembershipData={selectedMembershipData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
