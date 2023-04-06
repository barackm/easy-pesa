import { IconSvgProps } from '@/entities/icon.interface';
import { colors } from '@/styles';
import { SvgXml } from 'react-native-svg';

const TrophyIcon: React.FC<IconSvgProps> = props => {
  const { color = colors.black, size = 20, isFocused } = props;

  const svgMarkup = `
  <svg width=${size} height=${size} viewBox="0 0 20 19" fill=${
    isFocused ? color : 'none'
  } xmlns="http://www.w3.org/2000/svg">
    <path fill=${
      isFocused ? color : 'none'
    } d="M6 18H14M10 18V14M10 14C7.23858 14 5 11.7614 5 9V3M10 14C12.7614 14 15 11.7614 15 9V3M15 3C15 1.89543 14.1046 1 13 1H7C5.89543 1 5 1.89543 5 3M15 3H16.5C17.8807 3 19 4.11929 19 5.5C19 6.88071 17.8807 8 16.5 8H15M5 3H3.5C2.11929 3 1 4.11929 1 5.5C1 6.88071 2.11929 8 3.5 8H5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
};

export default TrophyIcon;
