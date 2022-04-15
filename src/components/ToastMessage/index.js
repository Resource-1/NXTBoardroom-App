import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CustomIcon from '../CustomIcon';
import Label from '../Label';

import {CommonAction} from '../../state/ducks/common';
import {isIOS, screenWidth, screenHeight} from '../../utils/globals';
import {Color, Font} from '../../utils/theme';
import {Toast} from '../../utils/variable';

const ToastMessage = () => {
  const dispatch = useDispatch();

  const visible = useSelector(state => state.common.visible);
  const message = useSelector(state => state.common.message);
  const type = useSelector(state => state.common.type);

  useEffect(() => {
    if (visible) {
      const timeOutSec = type == Toast.SUCCESS ? 3000 : 5000;
      setTimeout(() => {
        dispatch(CommonAction.hideToast());
      }, timeOutSec);
    }
  }, [visible]);

  return (
    <>
      {visible && (
        <View style={styles.mainView}>
          <View
            style={[
              styles.containerinfo,
              {
                backgroundColor:
                  type == Toast.SUCCESS
                    ? Color.$BG_BLUE
                    : type == Toast.FAIL
                    ? Color.$BG_RED
                    : Color.$BG_YELLOW,
              },
            ]}>
            <Label
              style={[
                styles.message,
                {
                  color:
                    type == Toast.SUCCESS
                      ? Color.$TEXT_WHITE
                      : type == Toast.FAIL
                      ? Color.$TEXT_WHITE
                      : Color.YELLOW,
                },
              ]}>
              {message}
            </Label>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  containerinfo: {
    width: screenWidth,
    height: screenHeight,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    fontSize: Font.$FONT_24,
    fontFamily: Font.$TUSSILAGOBOLD,
    lineHeight: 45,
    textTransform: 'uppercase',
  },
});

export default ToastMessage;
