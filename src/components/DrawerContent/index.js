import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

const DrawerContent = ({navigation, route, props}) => {
  const {t} = useTranslation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Drawer</Text>
      </SafeAreaView>
    </>
  );
};

DrawerContent.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default DrawerContent;
