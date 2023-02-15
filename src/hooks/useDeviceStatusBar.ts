import { Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useDeviceStatusBar = () => {
  const statusBarHeight = Platform.select({
    ios: useSafeAreaInsets().top,
    android: StatusBar.currentHeight,
    default: 0,
  });

  return {
    statusBarHeight,
  };
};

export default useDeviceStatusBar;
