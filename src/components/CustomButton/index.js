import React from 'react';
import {StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Label from '../Label';
import {Color, Font, FontFamily, FontSize} from '../../utils/theme';
import IconButton from '../IconButton';

const CustomButton = props => {
  const {
    style,
    buttonCustomStyle,
    activeOpacity,
    disabled,
    onPress,
    titleStyle,
    title,
  } = props;

  let buttonStyle = [];
  buttonStyle.push(styles.button);
  buttonStyle.push(style);

  let textStyle = [];
  textStyle.push(styles.title);
  textStyle.push(titleStyle);

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: disabled ? Color.$DISABLE_COLOR : Color.$BG_BLUE},
        buttonCustomStyle,
      ]}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}>
      <Label
        style={[
          styles.textStyle,
          {color: disabled ? Color.$TEXT_WHITE : Color.$TEXT_WHITE},
          titleStyle,
        ]}>
        {title}
      </Label>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  style: ViewPropTypes.style,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,

  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconCustomLeftStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    height: 48,
  },
  textStyle: {
    color: Color.$TEXT_WHITE,
    fontFamily: Font.$TUSSILAGOBOLD,
    fontSize: Font.$FONT_12,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
