import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  linearGradientSlider: {
    height: '100%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
  },
  membershipSlider: {
    height: '80%',
    borderRadius: 16,
    paddingTop: 44,
  },
  isCurrrentCard: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 16,
  },
  isCurrrentCardText: {
    color: '#4D6881',
    fontWeight: '600',
    fontSize: 12,
  },
  cardHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Literata-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    paddingBottom: 20,
    paddingTop: 20,
  },
  cardFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
    gridGap: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  tableText: {
    fontSize: 16,
    color: 'white',
  },
  linearBtnCard: {
    borderRadius: 16,
  },
  btnCard: {
    padding: 12,
  },
  btnCardText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
  btnCardSubText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    paddingTop: 4,
  },
  currentPlanCard: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -10,
    zIndex: 9,
  },
  currentPlanCardText: {
    textAlign: 'center',
    padding: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  // common
  width60: {
    width: '60%',
    maxWidth: '60%',
  },
  width40: {
    width: '40%',
    maxWidth: '40%',
  },
  fw600: {
    fontWeight: '600',
  },
});
