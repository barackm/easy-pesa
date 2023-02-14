import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { ISvgProps } from '../../types/svg';

const GraphIcon: React.FC<ISvgProps> = props => {
  const { size = 22, color, focused, colors } = props;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill={focused ? color : 'none'}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2779 12.8887C16.9526 12.8887 17.5189 13.4455 17.4158 14.1118C16.8105 18.0318 13.4547 20.9423 9.40737 20.9423C4.92947 20.9423 1.3 17.3129 1.3 12.836C1.3 9.1476 4.1021 5.71181 7.25684 4.93497C7.93474 4.7676 8.62947 5.24445 8.62947 5.94234C8.62947 10.6708 8.78842 11.8939 9.68631 12.5592C10.5842 13.2244 11.64 12.8887 16.2779 12.8887Z"
        stroke={focused ? color : colors.grey[700]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6925 8.95121C20.7462 5.91331 17.0146 1.01647 12.4673 1.10068C12.1136 1.107 11.8304 1.40173 11.8146 1.75437C11.6999 4.25226 11.8546 7.4891 11.9409 8.95647C11.9673 9.41331 12.3262 9.77226 12.782 9.79858C14.2904 9.88489 17.6452 10.0028 20.1073 9.63015C20.442 9.57963 20.6873 9.2891 20.6925 8.95121Z"
        stroke={focused ? colors.secondary.main : colors.grey[700]}
        strokeWidth="1.5"
        fill={focused ? colors.secondary.main : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GraphIcon;
