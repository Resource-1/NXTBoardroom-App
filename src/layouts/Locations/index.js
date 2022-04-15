import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import {Color, Font} from '../../utils/theme';
import {useTranslation} from 'react-i18next';
import {screenHeight, screenWidth} from '../../utils/globals.js';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderLeft from '../../components/HeaderLeft';
import CustomIcon from '../../components/CustomIcon';
import styles from './style.js';

const Loactions = ({navigation}) => {
  const {t} = useTranslation();
  const {navigate} = navigation;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle title={t('LOCATIONS')} />,
    });
  }, [navigation]);

  return <View style={styles.container}></View>;
};

export default Loactions;
