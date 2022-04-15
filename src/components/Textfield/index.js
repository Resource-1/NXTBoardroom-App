import React from 'react';
import {View, StyleSheet, TextInput, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Label from '../Label';
import {Color, Font} from '../../utils/theme';
import CustomIcon from '../CustomIcon';
import IconButton from '../IconButton';
import {Controller, useForm} from 'react-hook-form';

const Textfield = props => {
  const {
    inputContainerStyle,
    labelTitle,
    inputStyle,
    placeholder,
    disabled,
    disabledIcon,
    iconName,
    iconStyle,
    defaultValue,
    placeholderTextColor,
    value,
    editable,
    secureTextEntry,
    autoCorrect,
    autoCapitalize,
    multiline,
    textAlignVertical,
    textAlign,
    numberOfLines,
    maxLength,
    keyboardType,
    returnKeyType,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    inputAccessoryViewID,
    reference,
    autoFocus,
    onPressIcon,
  } = props;
  const {errorMessage} = props;

  return (
    <View>
      <View
        style={[
          styles.textInputContainer,
          inputContainerStyle,
          {
            borderColor:
              errorMessage.length > 0
                ? Color.$BORDER_RED
                : Color.$BORDER_LIGHT_GREY,
          },
        ]}>
        {labelTitle && <Label style={styles.labelTitle}>{labelTitle}</Label>}
        <TextInput
          defaultValue={defaultValue}
          disabled={disabled}
          style={[styles.textInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          editable={editable}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          textAlign={textAlign}
          maxLength={maxLength}
          keyboardType={keyboardType}
          returnKeyType={keyboardType == 'number-pad' ? 'done' : returnKeyType}
          onChangeText={value => {
            value = value.trimStart();
            onChangeText(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          inputAccessoryViewID={inputAccessoryViewID}
          ref={reference}
          autoFocus={autoFocus}
        />
        {iconName && (
          <IconButton
            style={styles.button}
            disabled={disabledIcon}
            iconName={iconName}
            onPress={onPressIcon}
            iconStyle={[styles.iconStyle, iconStyle]}
          />
        )}
      </View>
      {errorMessage.length > 0 &&
        JSON.parse(errorMessage).map((item, index) => (
          <View key={index.toString()} style={styles.messageIcon}>
            {/* <CustomIcon
              name={item.valid ? 'check_bold' : 'error_outline'}
              style={item.valid ? styles.succsesIcon : styles.errorIcon}
            /> */}
            <Label
              style={
                item.valid ? styles.succsesTextStyle : styles.errorTextStyle
              }>
              {item.title}
            </Label>
          </View>
        ))}
    </View>
  );
};

Textfield.defaultProps = {
  placeholderTextColor: Color.$TEXT_LIGHT_GREY,
  editable: true,
  secureTextEntry: false,
  autoCorrect: true,
  autoCapitalize: 'none',
  multiline: false,
  textAlignVertical: 'center',
  disabledIcon: true,
  errorMessage: '',
  autoFocus: false,
};

Textfield.propTypes = {
  style: ViewPropTypes.style,
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  value: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  textAlign: PropTypes.string,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  inputAccessoryViewID: PropTypes.string,
  errorMessage: PropTypes.string,
  onPressIcon: PropTypes.func,
  reference: PropTypes.any,
  disabledIcon: PropTypes.bool,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconName: PropTypes.string,
  autoFocus: PropTypes.bool,
};

const styles = StyleSheet.create({
  textInputContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 36,
    flexWrap: 'wrap',
    height: 48,
    borderWidth: 2,
    borderColor: Color.$BORDER_LIGHT_GREY,
    // padding: 14,
    paddingLeft: 16,
    margin: 0,
    backgroundColor: Color.WHITE,
    borderRadius: 0,
  },
  labelTitle: {
    fontFamily: Font.$VERDANA_REGULAR,
    fontSize: Font.$FONT_14,
    color: Color.BLUE,
  },
  textInput: {
    width: '88%',
    fontFamily: Font.$VERDANA_REGULAR,
    fontSize: Font.FONT_14,
    color: Color.$TEXT_BLACK,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 6,
  },
  iconStyle: {
    fontSize: Font.$FONT_24,
    color: Color.$TEXT_LIGHT_GREY,
  },
  messageIcon: {
    width: '100%',
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  errorTextStyle: {
    color: Color.$TEXT_RED,
    fontFamily: Font.$VERDANA_REGULAR,
    fontSize: Font.$FONT_12,
  },

  // succsesTextStyle: {
  //   color: Color.CLOUDBURST,
  //   fontFamily: Font.ROBOTOREGULAR,
  //   fontSize: Font.SIZE_14
  // },
  // succsesIcon: {
  //   marginRight: 4,
  //   position: 'relative',
  //   color: Color.CLOUDBURST,
  //   fontSize: Font.SIZE_16
  // },
  // errorIcon: {
  //   marginRight: 4,
  //   position: 'relative',
  //   color: Color.RED,
  //   fontSize: Font.SIZE_16,
  // },
});

export default Textfield;
