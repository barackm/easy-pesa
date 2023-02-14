import { TColors } from '../theme';

export interface ISvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  focused?: boolean;
  colors: TColors;
}
