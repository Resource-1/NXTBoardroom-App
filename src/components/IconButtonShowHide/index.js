
import React from 'react';
import { View, ViewPropTypes, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CustomIcon from '../CustomIcon';

const IconButtonShowHide = (props) => {
    const { style, iconName, iconStyle, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}
            style={style}>
            <CustomIcon
                name={iconName}
                style={iconStyle}
            />
        </TouchableOpacity>
    )
}

IconButtonShowHide.propTypes = {
    style: ViewPropTypes.style,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,

    iconName: PropTypes.string,
    iconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
};

export default IconButtonShowHide;