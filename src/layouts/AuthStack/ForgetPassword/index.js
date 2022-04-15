import React, {useState, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../../state/ducks/common';
import {REGEX} from '../../../utils/validation';

import Routes from '../../../navigation/Routes';
import {validatePassword} from '../../../utils/validation';
import Label from '../../../components/Label';
import Textfield from '../../../components/Textfield';
import CustomButton from '../../../components/CustomButton';
import ToastMessage from '../../../components/ToastMessage';
import {Toast} from '../../../utils/variable';

import styles from './style';

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

  // const onSubmitPress = data => {
  //   // {
  //   //   console.log('test');
  //   // }
  //   // navigate(Routes.SignIn);
  //   setTimeout(() => {
  //     ToastMessage.show({
  //       type: Toast.SUCCESS,
  //       message: t('loggedSuccessfully'),
  //     });
  //     // navigate(Routes.SignIn);
  //   }, 300);
  // };

  const onSubmitPress = data => {
    // Keyboard.dismiss();
    const toastData = {type: Toast.SUCCESS, message: t('FORGETPASSWORDTOAST')};
    dispatch(CommonAction.showToast(toastData));
    setTimeout(() => {
      // navigate(Routes.SignIn);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.cardView}>
          <Label style={styles.title}>{t('forgotpassword')}</Label>
          <Label style={styles.subTitle}>
            {t('Enter your email address below')}
          </Label>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Textfield
                placeholder={t('enterEmail')}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.email?.message}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType={'next'}
              />
            )}
            name="email"
            rules={{
              required: {
                value: true,
                message: JSON.stringify([{valid: false, title: t('Errormsg')}]),
              },
              pattern: {
                value: REGEX.EMAIL,
                message: JSON.stringify([
                  {valid: false, title: t('emailInvalid')},
                ]),
              },
            }}
          />

          <View style={styles.inputBox}>
            <CustomButton
              buttonCustomStyle={styles.buttonCustomStyle}
              disabled={!isValid}
              title={t('submit')}
              onPress={() => {
                onSubmitPress();
              }}
            />
            <View style={styles.texts} navigate={Routes.ForgetPassword}>
              <Label
                onPress={() => {
                  navigate(Routes.SignIn);
                }}
                style={styles.textstyle}>
                {t('BackToLogin')}
              </Label>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FirstTimeLoginScreen;
