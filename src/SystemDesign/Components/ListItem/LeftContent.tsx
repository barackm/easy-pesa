import React from 'react';
import { metrics } from '@/styles';
import { useTheme } from '@/theme/ThemeContext';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ApplyShadow from '@/Components/ApplyShadow/Index';
import ConditionalWrap from 'conditional-wrap';

interface LeftContentProps {
  leftIconData?: {
    render: ({ size, color }: IconProps) => React.ReactNode;
    bgColor?: string;
    gradient?: string[];
  };
}

type IconProps = {
  size: number;
  color: string;
};

const LeftContent: React.FC<LeftContentProps> = props => {
  const { leftIconData } = props;
  const { colors } = useTheme();

  return (
    <View style={styles.leftContainer}>
      <View style={styles.leftContent}>
        {leftIconData && (
          <ApplyShadow
            backgroundColor={
              leftIconData.gradient
                ? leftIconData.gradient[0]
                : leftIconData.bgColor || 'transparent'
            }
            showShadow={
              leftIconData?.gradient || leftIconData?.bgColor ? true : false
            }>
            <ConditionalWrap
              condition={!!(leftIconData && leftIconData.gradient)}
              wrap={_children => (
                <LinearGradient
                  colors={leftIconData?.gradient || []}
                  style={styles.leftContentIcon}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}>
                  {leftIconData?.render &&
                    leftIconData.render({
                      size: metrics.moderateScale(20),
                      color: colors.getTextColorForBackground(
                        colors.gradients.blueToGreen[0],
                      ),
                    })}
                </LinearGradient>
              )}>
              <View
                style={[
                  styles.leftContentIcon,
                  {
                    backgroundColor: leftIconData?.bgColor || 'transparent',
                  },
                ]}>
                {leftIconData?.render &&
                  leftIconData.render({
                    size: leftIconData?.bgColor
                      ? metrics.moderateScale(20)
                      : metrics.moderateScale(25),
                    color: leftIconData?.bgColor
                      ? colors.getTextColorForBackground(leftIconData?.bgColor)
                      : colors.black,
                  })}
              </View>
            </ConditionalWrap>
          </ApplyShadow>
        )}
      </View>
    </View>
  );
};

export default LeftContent;

const styles = StyleSheet.create({
  leftContent: {},
  leftContainer: {
    marginRight: metrics.moderateScale(10),
  },
  rightContainer: {},
  leftContentIcon: {
    width: metrics.moderateScale(30),
    height: metrics.moderateScale(30),
    borderRadius: metrics.moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
