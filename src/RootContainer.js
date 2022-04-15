import React, {useRef} from 'react';
import {TextInput, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProgressHud from './components/ProgressHud';
import ToastMessage from './components/ToastMessage';
import {AuthStack, DrawerStack} from './navigation';
import Routes from './navigation/Routes';
import _ from 'lodash';

TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
Text.defaultProps = {...(Text.defaultProps || {}), allowFontScaling: false};
Text.defaultProps.allowFontScaling = false;

const RootContainer = () => {
  const BaseStack = createStackNavigator();
  const navigationRef = useRef();

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#ffffff';

  return (
    <>
      <NavigationContainer theme={navTheme} ref={navigationRef}>
        <BaseStack.Navigator>
          <BaseStack.Screen
            name={Routes.Auth}
            component={AuthStack}
            options={{
              headerShown: false,
              animationTypeForReplace: 'push',
            }}
          />
          <BaseStack.Screen
            name={Routes.Drawer}
            component={DrawerStack}
            options={{headerShown: false}}
          />
        </BaseStack.Navigator>
      </NavigationContainer>
      <ToastMessage />
      <ProgressHud />
    </>
  );
};

export default RootContainer;
