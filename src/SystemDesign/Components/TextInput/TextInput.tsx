import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';
import React, { useContext } from 'react';
import { TextInputProps } from 'react-native';
import { FormikContext, FormikProps } from 'formik';
import ErrorIcon from '@/Components/Icons/ErrorIcon';
import { useTheme } from '@/theme/ThemeContext';
import Text from '../Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import { metrics } from '@/styles';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface TextInput extends TextInputProps {
  startIcon?: ({ color, size }: any) => React.ReactNode;
  endIcon?: ({ color, size }: any) => React.ReactNode;
  label?: string;
  error?: string;
  onTextChange?: (text: string) => void;
  name?: string;
}

const TextInput: React.FC<TextInput> = props => {
  const { onTextChange, startIcon, endIcon, label, name, error, ...rest } =
    props;
  const formik = useContext<FormikProps<any>>(FormikContext);
  const { errors, setFieldTouched, handleChange, touched }: any = formik || {};
  const [isFocused, setIsFocused] = React.useState(false);

  const { colors } = useTheme();

  const borderColor = isFocused ? colors.blueGreyDark : colors.cardBackdrop;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(borderColor, {
        duration: 200,
      }),
    };
  });

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: metrics.moderateScale(5),
    },
    labelWrapper: {},
    inputWrapper: {
      borderWidth: 1,
      height: metrics.moderateScale(35),
      borderRadius: metrics.moderateScale(20),
      paddingHorizontal: metrics.moderateScale(12),
      flexDirection: 'row',
      alignItems: 'center',
    },
    startIconWrapper: {},
    inputContainer: {
      flex: 1,
    },
    endIconWrapper: {},
    errorWrapper: {},
  });

  return (
    <View style={[styles.container]}>
      {label && (
        <View style={styles.labelWrapper}>
          <Text variant={TextVariant.body}>{label}</Text>
        </View>
      )}
      <Animated.View style={[styles.inputWrapper, animatedStyle]}>
        {startIcon && (
          <View style={styles.startIconWrapper}>
            {startIcon({ color: 'red', size: 20 })}
          </View>
        )}
        <View style={styles.inputContainer}>
          <RNTextInput
            onChangeText={(text: string) => {
              if (handleChange) {
                handleChange(name as string)(text);
                return;
              }
              onTextChange && onTextChange(text);
            }}
            onBlur={() => {
              setIsFocused(false);
              if (setFieldTouched) {
                setFieldTouched(name as string);
                return;
              }
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            placeholderTextColor={colors.blueGreyDark60}
            {...rest}
          />
        </View>
        {endIcon && (
          <View style={styles.endIconWrapper}>
            {endIcon({ color: 'red', size: 20 })}
          </View>
        )}
      </Animated.View>
      {((errors && touched[name as string]) || error) && (
        <View style={styles.errorWrapper}>
          <ErrorIcon color={colors.red} scale={0.8} />
          <Text>{error || errors[name as string]}</Text>
        </View>
      )}
    </View>
  );
};

export default TextInput;
