import {StyleSheet} from 'react-native';
import {Color, Font} from '../../utils/theme';
import {screenHeight, screenWidth} from '../../utils/globals.js';

const styles = StyleSheet.create({
  // content: {
  //   flex: 1,
  // },
  // paragrapg: {
  //   color: Color.$TEXT_BLACK,
  //   fontSize: Font.$FONT_48,
  //   fontfamily: Font.$FREIGHTBIGPROBOOK,
  //   lineHeight: 61,
  //   width: screenWidth,

  //   paddingTop: 50,
  // },
  // container: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 19,
  //   backgroundColor: Color.$BG_WARM_GREY,
  // },
  container: {
    flex: 1,
    // paddingTop: ,
    // backgroundColor: Color.$BG_WARM_GREY,
    backgroundColor: '#EBE5E1',
    paddingBottom: screenHeight - 710,
    paddingTop: 100,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    color: Color.$TEXT_BLACK,
    fontSize: Font.$FONT_48,
    fontFamily: Font.$FREIGHTBIGPROMEDIUNM,
  },
  bottomIcon: {
    position: 'absolute',
    bottom: -50,
    top: 20,
    left: 163,
    right: 163,
    top: 'auto',
    fontSize: 48,
  },
});

export default styles;
