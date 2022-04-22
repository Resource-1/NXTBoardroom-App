import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Label from '../Label';
import {Color, Font} from '../../utils/theme';
import {screenWidth} from '../../utils/globals';

const HeaderTitle = props => {
  const {title, titleStyle} = props;
  return <Label style={[styles.title, titleStyle]}>{title}</Label>;
};

HeaderTitle.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  title: {
    fontSize: Font.$FONT_13,
    fontFamily: Font.$TUSSILAGOBOLD,
    color: Color.$TEXT_BLACK,
    textTransform: 'uppercase',
    position: 'absolute',
    right: 0,
    top: 'auto',
    lineHeight: 20,
  },
});

export default HeaderTitle;
