export interface ISwitch {
  color?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  name?: string;
  value?: boolean;
}
