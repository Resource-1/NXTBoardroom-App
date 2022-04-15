import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import {Color, Font} from '../../utils/theme';
import CustomIcon from '../../components/CustomIcon';

const HeaderLeft = props => {
  const {onPress, iconName, iconStyle} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <IconButton
        style={styles.container}
        iconName={iconName}
        disabled={true}
        iconStyle={[styles.iconStyle, iconStyle]}
      />
    </TouchableOpacity>
  );
};

HeaderLeft.defaultProps = {
  iconName: 'lines',
};

HeaderLeft.propTypes = {
  onPress: PropTypes.func,

  iconName: PropTypes.string,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  iconStyle: {
    fontSize: Font.FONT_14,
    color: Color.$TEXT_BLUE,
  },
});

export default HeaderLeft;
