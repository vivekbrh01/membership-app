import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  backArrowWhite: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 50,
  },
  paymentButton: {
    position: 'absolute',
    bottom: 0,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 19,
    color: '#0A3A67',
  },
  paymentButtonSubText: {
    paddingTop: 4,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: '#0A3A67',
  },
  proceedPaymentBtn: {
    backgroundColor: '#0A3A67',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    gridGap: 12,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 20,
    paddingLeft: 20,
  },
  proceedPaymentBtnText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
  },
  rightArrowWhite: {
    height: 14,
    width: 14,
  },
});
