import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface StartIconsProps {
  isSearch?: boolean;
  startIcon?:
    | React.ReactNode
    | ((props: { size: number; color: string }) => React.ReactNode);
  iconStyles?: { size: number; color?: string };
}

const StartIcons: React.FC<StartIconsProps> = props => {
  const { isSearch, startIcon, iconStyles } = props;

  return (
    <>
      {(startIcon || isSearch) && (
        <View
          style={{
            ...styles.iconContainer,
            ...styles.startIcon,
          }}>
          {isSearch ? (
            <Ionicons
              name="ios-search-outline"
              size={iconStyles?.size}
              color={iconStyles?.color}
            />
          ) : typeof startIcon === 'function' ? (
            startIcon({
              size: iconStyles?.size || 15,
              color: iconStyles?.color || 'black',
            })
          ) : (
            startIcon
          )}
          {}
        </View>
      )}
    </>
  );
};

export default StartIcons;
