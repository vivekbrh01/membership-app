import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerNeomorphic: {
    padding: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.12,
    shadowRadius: 25,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrowBlue: {
    height: 24,
    width: 24,
    padding: 0,
  },
  backArrowBlueBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityZero: {
    opacity: 0,
  },
  opacityOne: {
    opacity: 1,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    color: '#0A3A67',
  },
});
