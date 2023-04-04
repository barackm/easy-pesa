import { StyleSheet, View } from 'react-native';
import React from 'react';

import Text from '@/SystemDesign/Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import { metrics } from '@/styles';
import LeftContent from './LeftContent';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';

interface ListItemProps {
  leftIconData?: {
    render: ({ size, color }: IconProps) => React.ReactNode;
    bgColor?: string;
    gradient?: string[];
  };
  renderRightContent?: () => React.ReactNode;
  title: string;
  subTitle?: string;
  renderLeftContent?: () => React.ReactNode;
}
type IconProps = {
  size: number;
  color: string;
};

const ListItem: React.FC<ListItemProps> = props => {
  const {
    leftIconData,
    renderRightContent,
    title,
    subTitle,
    renderLeftContent,
  } = props;

  const alignItems = !subTitle ? 'center' : 'flex-start';

  return (
    <AnimatedButton>
      <View
        style={[
          styles.container,
          {
            alignItems: alignItems,
          },
        ]}>
        {(leftIconData || renderLeftContent) && (
          <LeftContent leftIconData={leftIconData} />
        )}
        <View style={styles.body}>
          <View style={styles.title}>
            <Text numberOfLines={1} variant={TextVariant.subheadingMedium}>
              {title}
            </Text>
          </View>
          {subTitle && (
            <View style={styles.subTitle}>
              <Text style={styles.subTitleText}>{subTitle}</Text>
            </View>
          )}
        </View>
        {renderRightContent && (
          <View style={styles.rightContainer}>
            <Text>Right Content</Text>
          </View>
        )}
      </View>
    </AnimatedButton>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: metrics.moderateScale(7),
    width: '100%',
    paddingHorizontal: metrics.moderateScale(10),
  },
  body: {
    flex: 1,
  },
  title: {},
  subTitle: {},
  subTitleText: {
    opacity: 0.6,
  },
  leftContent: {},
  leftContainer: {},
  rightContainer: {
    marginLeft: metrics.moderateScale(10),
  },
  leftContentIcon: {
    width: metrics.moderateScale(30),
    height: metrics.moderateScale(30),
    borderRadius: metrics.moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
