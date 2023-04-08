export const space = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '8': 8,
  '10': 10,
  '12': 12,
  '15': 15,
  '16': 16,
  '19': 19,
  '20': 20,
  '24': 24,
  '28': 28,
  '30': 30,
  '32': 32,
  '34': 34,
  '36': 36,
  '42': 42,
  '44': 44,
  '52': 52,
  '60': 60,
  '72': 72,
  '80': 80,
  '104': 104,
} as const;

export const negativeSpace = {
  '-1': -1,
  '-2': -2,
  '-3': -3,
  '-4': -4,
  '-5': -5,
  '-6': -6,
  '-8': -8,
  '-10': -10,
  '-12': -12,
  '-15': -15,
  '-16': -16,
  '-19': -19,
  '-20': -20,
  '-24': -24,
  '-28': -28,
  '-30': -30,
  '-32': -32,
  '-34': -34,
  '-36': -36,
  '-42': -42,
  '-44': -44,
  '-52': -52,
  '-60': -60,
  '-72': -72,
  '-80': -80,
  '-104': -104,
} as const;

const spaceToNegativeSpace: Record<
  keyof typeof space,
  keyof typeof negativeSpace
> = {
  '1': '-1',
  '2': '-2',
  '3': '-3',
  '4': '-4',
  '5': '-5',
  '6': '-6',
  '8': '-8',
  '10': '-10',
  '12': '-12',
  '15': '-15',
  '16': '-16',
  '19': '-19',
  '20': '-20',
  '24': '-24',
  '28': '-28',
  '30': '-30',
  '32': '-32',
  '34': '-34',
  '36': '-36',
  '42': '-42',
  '44': '-44',
  '52': '-52',
  '60': '-60',
  '72': '-72',
  '80': '-80',
  '104': '-104',
};

export const positionSpace = {
  '0': 0,
} as const;

type CustomSpace = { custom: number };
export type Space = keyof typeof space | CustomSpace;
export type NegativeSpace = keyof typeof negativeSpace | CustomSpace;
export type PositionSpace = keyof typeof positionSpace | CustomSpace;

export function negateSpace(_space: Space): NegativeSpace {
  return typeof _space === 'object'
    ? { custom: -_space.custom }
    : spaceToNegativeSpace[_space];
}
