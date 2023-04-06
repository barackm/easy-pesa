import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

const UserIcon: React.FC<IconSvgProps> = props => {
  const { color = colors.black, size = 20, isFocused } = props;

  const svgMarkup = `
  <svg width=${size} height=${size} viewBox="0 0 18 20" fill=${
    isFocused ? color : 'none'
  } xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 19.0001H3.5C2.11929 19.0001 1 17.8808 1 16.5001C1 12.4194 7 12.5001 9 12.5001C11 12.5001 17 12.4194 17 16.5001C17 17.8808 15.8807 19.0001 14.5 19.0001Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default UserIcon;
