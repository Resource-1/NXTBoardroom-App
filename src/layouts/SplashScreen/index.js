import React, {useEffect} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import ProgressiveImage from '../../../components/ProgressiveImage';
import Routes from '../../../navigation/Routes';

import styles from './styles';

import {CommonAction} from '../../../state/ducks/common';
import {useDispatch} from 'react-redux';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const SplashScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {navigate} = navigation;

  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = Platform.OS == 'ios' ? 3100 : 3600;
    setTimeout(() => {
      dispatch(CommonAction.setShowHideSplash(false));
    }, timeOut);
  }, []);

  return (
    <View style={styles.Main}>
      <ProgressiveImage
        resizeMode={'contain'}
        source={require('../../../assets/images/NRGSplash.gif')}
      />
    </View>
  );
};

export default SplashScreen;
