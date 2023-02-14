import React from 'react';
import { ISvgProps } from '../../types/svg';
import { Path, Svg } from 'react-native-svg';

const WalletIcon: React.FC<ISvgProps> = props => {
  const { size = 22, color, focused, colors } = props;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 20"
      fill={focused ? color : 'none'}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z"
        stroke={focused ? colors.primary[300] : colors.grey[700]}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M20.6389 12.3962H16.5906C15.1042 12.3953 13.8994 11.1914 13.8985 9.70495C13.8985 8.2185 15.1042 7.01458 16.5906 7.01367H20.6389"
        stroke={focused ? colors.secondary.main : colors.grey[700]}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={focused ? colors.secondary.main : 'none'}
      />
      <Path
        d="M6.03561 5.53772H11.4346"
        stroke={focused ? colors.secondary.main : colors.grey[700]}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0486 9.64318H16.7369"
        stroke={focused ? colors.primary[300] : colors.grey[700]}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={focused ? colors.secondary.main : 'none'}
      />
    </Svg>
  );
};

export default WalletIcon;
