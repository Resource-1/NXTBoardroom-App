import {StyleSheet} from 'react-native';
import {Color, Font} from '../../../utils/theme';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Color.$BG_WHITE,
  },

  cardView: {
    paddingTop: 232,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: Font.$FONT_24,
    color: Color.$TEXT_BLUE,
    fontFamily: Font.$TUSSILAGOBOLD,
    textTransform: 'uppercase',
    fontWeight: Font.$Font_WEIGHT_700,
    paddingBottom: 16,
    lineHeight: 38,
  },
  inputBox: {
    paddingTop: 16,
    fontFamily: Font.$VERDANA_REGULAR,
  },
  buttonCustomStyle: {
    // backgroundColor: Color.$DISABLE_COLOR,
    color: Color.$TEXT_WHITE,
  },

  texts: {
    alignItems: 'center',
  },
  textstyle: {
    color: Color.$TEXT_BLUE,
    opacity: 1,
    fontFamily: Font.$TUSSILAGOBOLD,
    fontSize: Font.$FONT_12,
    textTransform: 'uppercase',
    paddingTop: 24,
  },
  subTitle: {
    fontFamily: Font.$FREIGHTBIGPROBOOK,
    color: Color.$TEXT_BLACK,
    fontSize: Font.$FONT_24,
    paddingTop: 10,
    paddingBottom: 24,
    fontWeights: 700,
  },
});

export default styles;
