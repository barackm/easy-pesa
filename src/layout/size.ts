import { metrics } from '@/styles';

const fraction = (numerator: number, denominator: number) =>
  `${(numerator * 100) / denominator}%`;

export const widths = {
  '1/2': fraction(1, 2),
  '1/3': fraction(1, 3),
  '1/4': fraction(1, 4),
  '1/5': fraction(1, 5),
  '2/3': fraction(2, 3),
  '2/5': fraction(2, 5),
  '3/4': fraction(3, 4),
  '3/5': fraction(3, 5),
  '4/5': fraction(4, 5),
  full: '100%',
} as const;

export const heights = {
  '1/2': fraction(1, 2),
  '1/3': fraction(1, 3),
  '1/4': fraction(1, 4),
  '1/5': fraction(1, 5),
  '104': metrics.moderateScale(104),
  '126': metrics.moderateScale(126),
  '2/3': fraction(2, 3),
  '2/5': fraction(2, 5),
  '3/4': fraction(3, 4),
  '3/5': fraction(3, 5),
  '30': metrics.moderateScale(30),
  '36': metrics.moderateScale(36),
  '4/5': fraction(4, 5),
  '40': metrics.moderateScale(40),
  '46': metrics.moderateScale(46),
  '56': metrics.moderateScale(56),
  '64': metrics.moderateScale(64),
  '68': metrics.moderateScale(68),
  full: '100%',
} as const;

type CustomSize = { custom: number };
export type Width = keyof typeof widths | CustomSize;
export type Height = keyof typeof heights | CustomSize;
