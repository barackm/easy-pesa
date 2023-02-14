export interface IButton {
  label?: string;
  onPress: () => void;
  startIcon?: ({ color, size }: IconProps) => React.ReactNode | React.ReactNode;
  endIcon?: ({ color, size }: IconProps) => React.ReactNode | React.ReactNode;
  disabled?: boolean;
  styles?: any;
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  autoWidth?: boolean;
  renderIconBtn?: ({
    color,
    size,
  }: IconProps) => React.ReactNode | React.ReactNode;
}

export type IconProps = {
  color: string;
  size: number;
};

export enum EButtonVariant {
  outlined = 'outlined',
  contained = 'contained',
  text = 'text',
}
