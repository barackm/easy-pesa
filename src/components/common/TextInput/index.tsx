import React, { useEffect, useState } from 'react';
import { Text, View, TextInput as RNTextInput } from 'react-native';
import { ITextInput } from '../../../types/textInput';
import useInputStyles from '../../../hooks/useInputStyles';
import StartIcons from './StartIcons';
import EndIcons from './EndIcons';
import SecureTextControls from './SecureTextControls';
import styles from './styles';

const TextInput: React.FC<ITextInput> = props => {
  const {
    label,
    startIcon,
    endIcon,
    placeholder,
    color = 'primary',
    disabled,
    error = null,
    keyboardType,
    multiline,
    numberOfLines,
    onBlur,
    onChangeText,
    onFocus,
    secureTextEntry,
    style = {},
    value,
    isSearch,
    autoCorrect = true,
    autoCapitalize = 'sentences',
    autoComplete = 'off',
  } = props;
  const [shouldSecureTextEntry, setShouldSecureTextEntry] =
    useState<boolean>(false);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const {
    mainContainerStyles,
    inputContainerStyles,
    iconStyles,
    errorMessageStyles,
    inputStyles,
  } = useInputStyles({
    color,
    disabled,
    error,
    isFocused,
    multiline,
    numberOfLines,
  });

  useEffect(() => {
    setShouldSecureTextEntry(secureTextEntry || false);
  }, [secureTextEntry]);

  return (
    <View
      style={{
        ...styles.root,
        ...mainContainerStyles,
        ...style,
      }}>
      {label && (
        <Text
          style={{
            ...styles.label,
          }}>
          {label}
        </Text>
      )}
      <View style={[styles.inputContainer, inputContainerStyles]}>
        <StartIcons
          iconStyles={iconStyles}
          isSearch={isSearch}
          startIcon={startIcon}
        />
        <RNTextInput
          onChangeText={onChangeText}
          onBlur={() => {
            setIsFocused(false);
            onBlur && onBlur();
          }}
          onFocus={() => {
            setIsFocused(true);
            onFocus && onFocus();
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={shouldSecureTextEntry}
          value={value}
          style={[styles.input, inputStyles as any]}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!disabled}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
        />

        <EndIcons
          endIcon={endIcon}
          error={error}
          errorMessageStyles={errorMessageStyles}
          iconStyles={iconStyles}
        />
        <SecureTextControls
          iconStyles={iconStyles}
          onShouldSecureTextEntryChange={setShouldSecureTextEntry}
          shouldSecureTextEntry={shouldSecureTextEntry}
          disabled={disabled}
          isSearch={isSearch}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          value={value}
        />
      </View>
      {error && (
        <Text
          style={{
            ...errorMessageStyles,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
