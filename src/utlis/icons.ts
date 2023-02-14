import { metrics } from '../theme';

export const getIconSize = (size?: number) => {
  if (!size) {
    return metrics.moderateScale(20);
  }

  return metrics.moderateScale(size);
};
