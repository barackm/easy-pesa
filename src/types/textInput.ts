import { IconProps } from './button';

export interface ITextInput {
  label?: string;
  startIcon?: ({ color, size }: IconProps) => React.ReactNode | React.ReactNode;
  endIcon?: ({ color, size }: IconProps) => React.ReactNode | React.ReactNode;
  placeholder?: string;
  error?: string;
  color?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  onChangeText: (text: string) => void;
  value?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  style?: any;
  isSearch?: boolean;
  name: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: any;
  autoCorrect?: boolean;
}
