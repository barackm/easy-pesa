import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types/svg';
import { View } from 'react-native';

const UserIcon: React.FC<ISvgProps> = props => {
  const { size, color, colors, focused } = props;
  const GREY_COLOR = colors.grey[700];
  const PRIMARY_COLOR = color || colors.primary[300];
  const SECONDARY_COLOR = colors.secondary.main;

  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={focused ? SECONDARY_COLOR : 'none'}
          stroke={focused ? SECONDARY_COLOR : GREY_COLOR}
        />
        <Path
          d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={focused ? PRIMARY_COLOR : 'none'}
          stroke={focused ? PRIMARY_COLOR : GREY_COLOR}
        />
      </Svg>
    </View>
  );
};

export default UserIcon;
