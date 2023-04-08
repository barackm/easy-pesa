import { StyleSheet, View } from 'react-native';
import React from 'react';

import Text from '@/SystemDesign/Components/Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';
import Stack from '../Stack/Stack';
import Inline from '../Inline/Inline';

interface MenuItemProps {
  titleComponent?: React.ReactNode;
  labelComponent?: React.ReactNode;
  size: 50 | 60;
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
  const { titleComponent, labelComponent } = props;

  return (
    <AnimatedButton>
      <View>
        <Inline>
          <Stack>
            {titleComponent}
            {labelComponent}
          </Stack>
        </Inline>
      </View>
    </AnimatedButton>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  title: {},
  subTitle: {},
  subTitleText: {},
});

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = props => {
  const { title } = props;

  return (
    <View style={styles.title}>
      <Text numberOfLines={1} variant={TextVariant.subheadingMedium}>
        {title}
      </Text>
    </View>
  );
};

interface SubTitleProps {
  subTitle: string;
}
const SubTitle: React.FC<SubTitleProps> = props => {
  const { subTitle } = props;

  return (
    <View style={styles.subTitle}>
      <Text style={styles.subTitleText}>{subTitle}</Text>
    </View>
  );
};

MenuItem.Title = Title;
MenuItem.SubTitle = SubTitle;
