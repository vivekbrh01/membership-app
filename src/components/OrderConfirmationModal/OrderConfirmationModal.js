import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

import commonStyles from '../../utils/common.styles';

export default function OrderConfirmationModal({
  setShowModal,
  showModal,
  selectedMembershipData,
  navigation,
}) {
  const {
    neomorphBg,
    neomorphBorderBlue,
    modalWrapper,
    modalContent,
    bgBlue,
    bgWhite,
    flex1,
    flexRow,
    alignCenter,
    justifyBetween,
    justifyCenter,
    g16,
    borderRadius30,
    borderRadius10,
    borderTopLightBlue,
    f16,
    f14,
    f12,
    fw600,
    fw500,
    colorBlue,
    colorLightBlue,
    colorWhite,
    colorLightPurple,
    textAlign,
    pt30,
    pr30,
    pl30,
    p20,
    pl16,
    pr14,
    pl14,
    pt8,
    pb8,
    mt16,
    mb16,
  } = commonStyles;

  function handleProceedBtnPress() {
    setShowModal(false);
    navigation.navigate('PaymentPage', {
      selectedMembershipData: selectedMembershipData,
    });
  }

  return (
    <Modal transparent={true} visible={showModal} animationType={'fade'}>
      <TouchableOpacity
        style={[flex1, p20, modalWrapper]}
        onPress={() => setShowModal(false)}>
        <View style={[modalContent, borderRadius30, neomorphBg, p20]}>
          <Text style={[f16, fw600, colorBlue, textAlign]}>
            Are you sure you want to place the order?
          </Text>
          <Text style={[f14, fw500, colorBlue]}>
            1. {selectedMembershipData?.title}
          </Text>
          <View style={[flexRow, alignCenter, justifyBetween]}>
            <Text style={[pl16, pt8, f12, fw500, colorLightBlue]}>
              Membership
            </Text>
            <Text style={[pt8, f16, fw500, colorBlue]}>
              {selectedMembershipData?.totalAmount}
            </Text>
          </View>
          <View style={[borderTopLightBlue, mt16, mb16]} />
          <View style={[flexRow, alignCenter, justifyBetween]}>
            <Text style={[pl14, f12, colorBlue]}>Total amount</Text>
            <Text style={[f16, fw500, colorLightPurple]}>
              {selectedMembershipData?.totalAmount}
            </Text>
          </View>
          <View style={[flexRow, alignCenter, justifyCenter, g16, pt30]}>
            <TouchableOpacity
              style={[borderRadius10, pl30, pr30, neomorphBorderBlue, bgWhite]}>
              <Text
                style={[pl14, pr14, pt8, pb8, f16, fw600]}
                onPress={() => setShowModal(false)}>
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[borderRadius10, pl30, pr30, neomorphBorderBlue, bgBlue]}
              onPress={() => handleProceedBtnPress()}>
              <Text style={[pl14, pr14, pt8, pb8, f16, fw600, colorWhite]}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
