import { metrics } from './metrics';

export const shadow = {
  shadowOffset: {
    width: 0,
    height: metrics.moderateScale(2),
  },
  shadowOpacity: 0.2,
  shadowRadius: metrics.moderateScale(2.5),
  elevation: metrics.moderateScale(4),
};
