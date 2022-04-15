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
  //   height: screenHeight - 50,
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
    // paddingTop: 20,
    // backgroundColor: Color.$BG_WARM_GREY,
    backgroundColor: 'pink',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    color: Color.$TEXT_BLACK,
    fontSize: Font.$FONT_48,
    fontfamily: Font.$FREIGHTBIGPROBOOK,
  },
  bottomIcon: {
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
