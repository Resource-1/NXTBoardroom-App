import React, {useState, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../../state/ducks/common';

import Routes from '../../../navigation/Routes';
import {validatePassword} from '../../../utils/validation';
import Label from '../../../components/Label';
import Textfield from '../../../components/Textfield';
import CustomButton from '../../../components/CustomButton';
import ToastMessage from '../../../components/ToastMessage';
import {Toast} from '../../../utils/variable';

import styles from './styles';

const FirstTimeLoginScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {navigate} = navigation;
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [password, setPassword] = useState({show: false});
  const [confirmPassword, setConfirmPassword] = useState({show: false});
  const dispatch = useDispatch();

  const showHidePassword = () => {
    setPassword({show: !password.show});
  };

  const showHideConfrimPassword = () => {
    // console.log('confirmPassword', confirmPassword);
    setConfirmPassword({show: !confirmPassword.show});
  };

  const onSubmitPress = data => {
    // Keyboard.dismiss();
    const toastData = {type: Toast.SUCCESS, message: t('setPassword')};
    dispatch(CommonAction.showToast(toastData));
    setTimeout(() => {
      navigate(Routes.SignIn);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.cardView}>
          <Label style={styles.title}>{t('SetPassword')}</Label>
          <View style={styles.inputBox}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Textfield
                  inputStyle={styles.inputStyle}
                  placeholder={t('NewPassword')}
                  secureTextEntry={!password.show}
                  value={value}
                  onChangeText={text => {
                    onChange(text);
                    const confirmPass = getValues('confirmPassword');
                    if (confirmPass) {
                      setValue('newPassword', confirmPass, {
                        shouldValidate: true,
                      });
                    }
                  }}
                  errorMessage={errors?.password?.message}
                  iconName={password.show ? 'eye' : 'eye-closed'}
                  disabledIcon={false}
                  onPressIcon={showHidePassword}
                  returnKeyType={'next'}
                  reference={passwordRef}
                  onSubmitEditing={() => confirmPasswordRef.current.focus()}
                  // iconLeftName="lock-on"
                />
              )}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: JSON.stringify([
                    {valid: false, title: t('PassRequired')},
                  ]),
                },
                validate: value => validatePassword(value, t),
              }}
            />
          </View>
          <View style={styles.inputBox}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Textfield
                  inputStyle={styles.inputStyle}
                  placeholder={t('ConfirmPassword')}
                  secureTextEntry={!confirmPassword.show}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors?.confirmPassword?.message}
                  iconName={confirmPassword.show ? 'eye' : 'eye-closed'}
                  disabledIcon={false}
                  returnKeyType={'done'}
                  style={styles.textfileds}
                  reference={confirmPasswordRef}
                  onPressIcon={showHideConfrimPassword}
                />
              )}
              name="confirmPassword"
              rules={{
                required: {
                  value: true,
                  message: JSON.stringify([{valid: false}]),
                },
                validate: value =>
                  value === getValues('password') ||
                  JSON.stringify([{valid: false, title: t('PasswordMatch')}]),
              }}
            />
          </View>
          <View style={styles.inputBox}>
            <CustomButton
              buttonCustomStyle={styles.buttonCustomStyle}
              disabled={!isValid}
              title={t('Submit')}
              onPress={() => {
                onSubmitPress();
              }}
            />
            <View style={styles.texts}>
              <Label style={styles.textstyle}>{t('cancel')}</Label>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FirstTimeLoginScreen;
