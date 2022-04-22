import React from 'react';
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
import CustomIcon from '../../components/CustomIcon';
import styles from './styles.js';

const AppTour = ({navigation}) => {
  const {t} = useTranslation();
  const {navigate} = navigation;

  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    //     <View style={styles.content}>
    //       <Text style={styles.paragrapg}>{t('APPTOURDETAILS')}</Text>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View>
          <Text style={styles.text}>{t('APPTOURDETAILS')}</Text>
        </View>
      </ScrollView>
      <View>
        <CustomIcon name="downArrow" style={styles.bottomIcon} />
      </View>
    </SafeAreaView>
  );
};

export default AppTour;
