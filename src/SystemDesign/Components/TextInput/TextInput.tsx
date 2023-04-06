import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';
import React, { useContext } from 'react';
import { TextInputProps } from 'react-native';
import { FormikContext, FormikProps } from 'formik';
import ErrorIcon from '@/Components/Icons/ErrorIcon';
import { useTheme } from '@/theme/ThemeContext';
import Text from '../Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import { font, metrics } from '@/styles';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { IconSvgProps } from '@/entities/icon.interface';
import EyeIcon from '@/Components/Icons/EyeIcon';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';

interface IconProps extends IconSvgProps {}
interface TextInput extends TextInputProps {
  startIcon?: ({ color, size, scale }: IconProps) => React.ReactNode;
  endIcon?: ({ color, size, scale }: IconProps) => React.ReactNode;
  label?: string;
  error?: string;
  onTextChange?: (text: string) => void;
  name?: string;
  secureTextEntry?: boolean;
}

const TextInput: React.FC<TextInput> = props => {
  const {
    onTextChange,
    startIcon,
    endIcon,
    label,
    name,
    secureTextEntry,
    error,
    ...rest
  } = props;
  const formik = useContext<FormikProps<any>>(FormikContext);
  const { errors, setFieldTouched, handleChange, touched }: any = formik || {};
  const [isFocused, setIsFocused] = React.useState(false);
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);

  const isErrorAvailable =
    error ||
    (errors && touched && touched[name as string] && errors[name as string]);

  const { colors } = useTheme();

  const borderColor = isErrorAvailable
    ? colors.red
    : isFocused
    ? colors.blueGreyDark
    : colors.cardBackdrop;

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
    labelWrapper: {
      marginBottom: metrics.moderateScale(5),
    },
    inputWrapper: {
      borderWidth: 1,
      height: metrics.moderateScale(35),
      borderRadius: metrics.moderateScale(20),
      paddingHorizontal: metrics.moderateScale(10),
      flexDirection: 'row',
      alignItems: 'center',
    },
    startIconWrapper: {
      marginRight: metrics.moderateScale(5),
    },
    inputContainer: {
      flex: 1,
    },
    endIconWrapper: {
      marginLeft: metrics.moderateScale(5),
    },
    errorWrapper: {
      flexDirection: 'row',
      width: '100%',
    },
    textInput: {
      fontSize: font.size.smedium,
      color: colors.black,
    },
    error: {
      flex: 1,
      lineHeight: metrics.moderateScale(15),
    },
    endIconButton: {
      paddingLeft: metrics.moderateScale(2),
      height: metrics.moderateScale(30),
    },
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
            {startIcon({
              color: colors.blueGreyDark,
              size: metrics.moderateScale(10),
              scale: 0.8,
            })}
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
            secureTextEntry={secureTextEntry && !isPasswordShown}
            onFocus={() => {
              setIsFocused(true);
            }}
            style={styles.textInput}
            placeholderTextColor={colors.darkGrey}
            {...rest}
          />
        </View>
        {(endIcon || secureTextEntry) && (
          <View style={styles.endIconWrapper}>
            {secureTextEntry ? (
              <AnimatedButton
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={styles.endIconButton}>
                <EyeIcon
                  scale={0.7}
                  isOff={isPasswordShown}
                  color={colors.blueGreyDark}
                />
              </AnimatedButton>
            ) : (
              endIcon &&
              endIcon({
                color: colors.blueGreyDark,
                size: metrics.moderateScale(10),
                scale: 0.6,
              })
            )}
          </View>
        )}
      </Animated.View>
      {((errors && touched[name as string]) || error) && (
        <View style={styles.errorWrapper}>
          <ErrorIcon color={colors.red} scale={0.6} />
          <Text
            variant={TextVariant.smallMedium}
            color={colors.red}
            style={styles.error}>
            {error || errors[name as string]}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TextInput;
