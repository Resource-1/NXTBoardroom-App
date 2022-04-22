import React from 'react';
import {View, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import setHeaderLeft from '../navigation/setHeaderLeft';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Color} from '../utils/theme';
import DrawerContent from '../components/DrawerContent';
import Routes from './Routes';
import _ from 'lodash';

// AuthStack
import FirstTimeLoginScreen from '../layouts/AuthStack/FirstTimeLoginScreen';
import SignIn from '../layouts/AuthStack/SignIn';
import ResetPassword from '../layouts/AuthStack/ResetPassword';
import ForgetPassword from '../layouts/AuthStack/ForgetPassword';

//Main screen
import AppTour from '../layouts/AppTour';
import Locations from '../layouts/Locations';

const screenOptions = () => ({
  headerLeft: () => setHeaderLeft('lines'),
  headerTitle: () => null,
  headerRight: () => <View />,
  headerStyle: {
    ...Platform.select({
      ios: {
        shadowColor: '#003362',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
    borderBottomWidth: 0,
    backgroundColor: Color.BG_WHITE,
    ...ifIphoneX(
      {
        height: 92,
      },
      {
        height: 48,
      },
    ),
  },

  gestureEnabled: false,
  headerTitleAlign: 'center',
});

const Auth = createStackNavigator();
export const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen
        name={Routes.Locations}
        component={Locations}
        options={{headerShown: true}}
      />

      <Auth.Screen
        name={Routes.AppTour}
        component={AppTour}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={Routes.FirstTimeLogin}
        component={FirstTimeLoginScreen}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={Routes.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={Routes.ResetPassword}
        component={ResetPassword}
        options={{headerShown: false}}
      />

      <Auth.Screen
        name={Routes.ForgetPassword}
        component={ForgetPassword}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};

//   );
// };

const Drawer = createDrawerNavigator();
export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      overlayColor={Color.TRANSPARENT}
      screenOptions={{
        gestureEnabled: false,
        drawerType: 'front',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={Routes.Locations}
        component={Locations}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen name={Routes.ViewQuestionnaire} component={ViewQuestionnaireScreen} options={{ headerShown: true, }} />
            <Drawer.Screen name={Routes.AllQuestionnaire} component={AllQuestionnaireScreen} options={{ headerShown: true, }} />
            <Drawer.Screen name={Routes.QuestionnaireDetail} component={QuestionnaireDetailScreen} options={{ headerShown: true, }} />
            <Drawer.Screen name={Routes.About} component={AboutScreen} options={{ headerShown: true, }} />
            <Drawer.Screen name={Routes.Syncronise} component={SyncroniseScreen} options={{ headerShown: true, }} /> */}
    </Drawer.Navigator>
  );
};
