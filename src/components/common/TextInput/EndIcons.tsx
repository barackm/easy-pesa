import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getIconSize } from '../../../utlis/icons';

import styles from './styles';

interface EndIconsProps {
  endIcon?:
    | React.ReactNode
    | ((props: { size: number; color: string }) => React.ReactNode);
  iconStyles?: { size: number; color?: string };
  error?: string | null;
  errorMessageStyles?: { color?: string };
}

const EndIcons: React.FC<EndIconsProps> = props => {
  const { endIcon, iconStyles, error, errorMessageStyles } = props;
  return (
    <>
      {(endIcon || error) && (
        <View style={styles.iconContainer}>
          {error ? (
            <MaterialIcons
              name="error-outline"
              size={iconStyles?.size}
              color={errorMessageStyles?.color}
            />
          ) : typeof endIcon === 'function' ? (
            endIcon({
              size: getIconSize(),
              color: 'black',
            })
          ) : (
            endIcon
          )}
        </View>
      )}
    </>
  );
};

export default EndIcons;
