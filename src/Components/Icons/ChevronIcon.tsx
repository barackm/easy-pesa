import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

interface ChevronIconProps extends IconSvgProps {
  direction?: 'left' | 'right';
}

const ChevronIcon: React.FC<ChevronIconProps> = props => {
  const { color = colors.black, size = 20, scale, direction } = props;

  const svgMarkupLeft = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11L3.23703 9.25269C1.8311 7.85925 1.12813 7.16252 1.01989 6.31333C0.99337 6.10527 0.99337 5.89473 1.01989 5.68667C1.12813 4.83748 1.8311 4.14075 3.23703 2.74731L5 1" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;

  const svgMarkupRight = `
  <svg width=${
    size / 2
  } height=${size} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L2.76297 2.74731C4.1689 4.14075 4.87187 4.83747 4.98011 5.68667C5.00663 5.89473 5.00663 6.10527 4.98011 6.31333C4.87187 7.16252 4.1689 7.85925 2.76297 9.25269L1 11" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
  </svg>

  `;
  return (
    <SvgXml
      xml={direction === 'left' ? svgMarkupLeft : svgMarkupRight}
      style={{
        transform: [{ scale: scale || 1 }],
      }}
    />
  );
};

export default ChevronIcon;
