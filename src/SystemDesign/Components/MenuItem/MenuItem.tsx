import { StyleSheet, View } from 'react-native';
import React from 'react';

import Text, { TextProps } from '@/SystemDesign/Components/Text/Text';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';
import Stack from '../Stack/Stack';
import Inline from '../Inline/Inline';
import Box from '../Box/Box';

interface MenuItemProps {
  titleComponent?: React.ReactNode;
  labelComponent?: React.ReactNode;
  size?: 50 | 60;
  hasRightChevron?: boolean;
  hasRightSwitch?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  isSelected?: boolean;
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
    hasRightSwitch,
    isSelected,
    size,
  } = props;

  return (
    <AnimatedButton>
      <Box width={{ custom: size || 50 }}>
        <Inline>
          <Box>
            {leftComponent && <Box>{leftComponent}</Box>}
            <Box>
              <Stack>
                {titleComponent}
                {labelComponent}
              </Stack>
            </Box>
          </Box>
          <Box>
            <Inline>
              {rightComponent}
              {hasRightChevron && (
                <Box>
                  <Text size="smedium" color="textSecondary">
                    {'>'}
                  </Text>
                </Box>
              )}
              {hasRightSwitch && (
                <Box>
                  <Text size="smedium" color="textSecondary">
                    {'>'}
                  </Text>
                </Box>
              )}

              {isSelected && (
                <Box>
                  <Text size="smedium" color="textSecondary">
                    {'>'}
                  </Text>
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
});

interface TitleProps extends Omit<TextProps, 'children'> {
  text: string;
  children?: never;
}

const Title: React.FC<TitleProps> = props => {
  const { text, size = 'bmedium', weight = 'medium', ...rest } = props;

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
}

const SubTitle: React.FC<SubTitleProps> = props => {
  const { text, size = 'bmedium', weight = 'medium', ...rest } = props;

  return (
    <View style={styles.subTitle}>
      <Text style={styles.subTitleText} size={size} weight={weight} {...rest}>
        {text}
      </Text>
    </View>
  );
};

MenuItem.Title = Title;
MenuItem.SubTitle = SubTitle;
