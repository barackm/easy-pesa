import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SecureTextControlsProps {
  secureTextEntry?: boolean;
  isSearch?: boolean;
  onShouldSecureTextEntryChange: (shouldSecureTextEntry: any) => void;
  value?: string;
  iconStyles: {
    size: number;
    color?: string;
  };
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  shouldSecureTextEntry: boolean;
}

const SecureTextControls: React.FC<SecureTextControlsProps> = props => {
  const {
    secureTextEntry,
    isSearch,
    onShouldSecureTextEntryChange,
    value,
    iconStyles,
    disabled,
    onChangeText,
    shouldSecureTextEntry,
  } = props;
  return (
    <>
      {(secureTextEntry || isSearch) && (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            if (isSearch) {
              onChangeText && onChangeText('');
              return;
            }
            onShouldSecureTextEntryChange((prev: boolean) => !prev);
          }}>
          {isSearch ? (
            <>
              {value && value.trim().length > 0 ? (
                <Ionicons
                  name="ios-close-outline"
                  size={iconStyles.size}
                  color={iconStyles.color}
                />
              ) : (
                ''
              )}
            </>
          ) : shouldSecureTextEntry ? (
            <Ionicons
              name="ios-eye-off-outline"
              size={iconStyles.size}
              color={iconStyles.color}
            />
          ) : (
            <Ionicons
              name="ios-eye-outline"
              size={iconStyles.size}
              color={iconStyles.color}
            />
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default SecureTextControls;
