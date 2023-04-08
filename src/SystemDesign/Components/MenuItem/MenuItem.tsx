import { StyleSheet, View } from 'react-native';
import React from 'react';

import Text, { TextProps } from '@/SystemDesign/Components/Text/Text';
import AnimatedButton from '@/SystemDesign/Components/AnimatedButton/AnimatedButton';
import Stack from '../Stack/Stack';
import Inline from '../Inline/Inline';
import Box from '../Box/Box';
import ChevronIcon from '@/Components/Icons/ChevronIcon';
// import { useTheme } from '@/theme/ThemeContext';
import CheckIcon from '@/Components/Icons/CheckIcon';
import { colors, metrics } from '@/styles';
import ApplyShadow from '../ApplyShadow/ApplyShadow';
import Switch from '../Switch/Switch';
import { FontSize, FontWeight } from '@/styles/fonts';

export interface MenuItemProps {
  id?: string | number;
  titleComponent?: React.ReactNode;
  labelComponent?: React.ReactNode;
  size?: 50 | 60 | 40;
  hasRightChevron?: boolean;
  hasRightSwitch?: boolean;
  hasRightSelectChevron?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  isSelected?: boolean;
  onPress?: () => void;
  animated?: boolean;
  onSwitchChange?: (value: boolean) => void;
  switchValue?: boolean;
  hasRightArrow?: boolean;
}
interface MenuItemComponent extends React.FC<MenuItemProps> {
  Title: React.FC<TitleProps>;
  SubTitle: React.FC<SubTitleProps>;
}

const MenuItem: MenuItemComponent = props => {
  const {
    titleComponent,
    labelComponent,
    leftComponent,
    rightComponent,
    hasRightChevron,
    hasRightArrow,
    hasRightSwitch,
    isSelected,
    hasRightSelectChevron,
    size = 50,
    onPress,
    animated = true,
    onSwitchChange,
    switchValue,
  } = props;
  return (
    <AnimatedButton onPress={onPress} disabled={!animated || hasRightSwitch}>
      <Box
        width="full"
        justifyContent={labelComponent ? 'flex-start' : 'center'}
        style={{
          minHeight: size,
        }}>
        <Inline space="10" alignVertical={labelComponent ? 'top' : 'center'}>
          <Box paddingHorizontal="15" paddingVertical="10" flex={1}>
            {leftComponent && <Box>{leftComponent}</Box>}
            <Box>
              <Stack space={labelComponent ? '8' : '1'}>
                {titleComponent}
                {labelComponent}
              </Stack>
            </Box>
          </Box>
          <Box paddingHorizontal="15" paddingVertical="10">
            <Inline>
              {rightComponent}
              {hasRightChevron && (
                <Box>
                  <ChevronIcon scale={0.7} color={colors.blueGreyDark60} />
                </Box>
              )}
              {hasRightSwitch && (
                <Box>
                  <Switch value={switchValue} onValueChange={onSwitchChange} />
                </Box>
              )}
              {hasRightSelectChevron && (
                <Box>
                  <ChevronIcon scale={0.7} color={colors.blueGreyDark60} />
                </Box>
              )}
              {hasRightArrow && (
                <Box>
                  <ChevronIcon
                    scale={0.8}
                    color={colors.blueGreyDark60}
                    direction="top-bottom"
                  />
                </Box>
              )}
              {isSelected && (
                <Box>
                  <ApplyShadow backgroundColor={colors.appleBlue}>
                    <View style={styles.checkIcon}>
                      <CheckIcon color={colors.white} scale={0.6} />
                    </View>
                  </ApplyShadow>
                </Box>
              )}
            </Inline>
          </Box>
        </Inline>
      </Box>
    </AnimatedButton>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  title: {},
  subTitle: {},
  subTitleText: {},
  checkIcon: {
    width: metrics.moderateScale(20),
    height: metrics.moderateScale(20),
    backgroundColor: colors.appleBlue,
    borderRadius: metrics.moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface TitleProps extends Omit<TextProps, 'children'> {
  text: string;
  children?: never;
}

const Title: React.FC<TitleProps> = props => {
  const { text, size = 'smedium', weight = 'medium', ...rest } = props;

  return (
    <View style={styles.title}>
      <Text
        numberOfLines={1}
        style={styles.subTitleText}
        size={size}
        weight={weight}
        {...rest}>
        {text}
      </Text>
    </View>
  );
};

interface SubTitleProps extends Omit<TextProps, 'children'> {
  text: string;
  children?: never;
  size?: FontSize;
  weight?: FontWeight;
}

const SubTitle: React.FC<SubTitleProps> = props => {
  const { text, size = 'smaller', weight = 'light', ...rest } = props;

  return (
    <View style={styles.subTitle}>
      <Text
        style={styles.subTitleText}
        size={size}
        weight={weight}
        lineHeight="tight"
        {...rest}>
        {text}
      </Text>
    </View>
  );
};

MenuItem.Title = Title;
MenuItem.SubTitle = SubTitle;
