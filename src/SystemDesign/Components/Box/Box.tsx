import { Height, Width, heights, widths } from '@/layout/size';
import {
  NegativeSpace,
  PositionSpace,
  Space,
  negativeSpace,
  positionSpace,
  space,
} from '@/layout/space';
import React, { ReactNode, forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import ConditionalWrap from 'conditional-wrap';
import ApplyShadow from '@/Components/ApplyShadow/ApplyShadow';
import { colors } from '@/styles';
import { StyleProp } from 'react-native';

export function resolveToken<TokenName extends string, TokenValue, CustomValue>(
  scale: Record<TokenName, TokenValue>,
  value: TokenName | { custom: CustomValue } | undefined,
) {
  return value
    ? typeof value === 'object'
      ? value.custom
      : scale[value]
    : undefined;
}

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';
type FlexDirection = 'row' | 'row-reverse' | 'column';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type Overflow = 'hidden' | 'visible' | 'scroll';
type Position = 'absolute' | 'relative';

export type BoxProps = {
  alignItems?: AlignItems;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  bottom?: PositionSpace;
  children?: ReactNode;
  flexBasis?: 0;
  flexDirection?: FlexDirection;
  flexGrow?: 0 | 1;
  flexShrink?: 0 | 1;
  flexWrap?: 'wrap';
  height?: Height;
  left?: PositionSpace;
  justifyContent?: JustifyContent;
  margin?: NegativeSpace;
  marginBottom?: NegativeSpace;
  marginHorizontal?: NegativeSpace;
  marginLeft?: NegativeSpace;
  marginRight?: NegativeSpace;
  marginTop?: NegativeSpace;
  marginVertical?: NegativeSpace;
  padding?: Space;
  paddingBottom?: Space;
  paddingHorizontal?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  paddingTop?: Space;
  paddingVertical?: Space;
  position?: Position;
  right?: PositionSpace;
  top?: PositionSpace;
  width?: Width;
  overflow?: Overflow;
  flex?: number;
  as?: React.ElementType;
  style?: StyleProp<any>;
} & (
  | {
      borderBottomRadius?: number;
      borderLeftRadius?: never;
      borderRightRadius?: never;
      borderTopRadius?: number;
    }
  | {
      borderBottomRadius?: never;
      borderLeftRadius?: number;
      borderRightRadius?: number;
      borderTopRadius?: never;
    }
) &
  (
    | {
        background?: string;
        shadow?: never;
      }
    | {
        background: string;
        shadow: string;
      }
  );

const Box: React.FC<BoxProps> = forwardRef((props, ref) => {
  const {
    alignItems,
    as: Component = View,
    background,
    borderBottomLeftRadius,
    borderBottomRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRadius,
    borderRightRadius,
    borderTopLeftRadius,
    borderTopRadius,
    borderTopRightRadius,
    bottom: bottomProp,
    children,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height: heightProp,
    justifyContent,
    left: leftProp,
    margin: marginProp,
    marginBottom: marginBottomProp,
    marginHorizontal: marginHorizontalProp,
    marginLeft: marginLeftProp,
    marginRight: marginRightProp,
    marginTop: marginTopProp,
    marginVertical: marginVerticalProp,
    overflow,
    padding: paddingProp,
    paddingBottom: paddingBottomProp,
    paddingHorizontal: paddingHorizontalProp,
    paddingLeft: paddingLeftProp,
    paddingRight: paddingRightProp,
    paddingTop: paddingTopProp,
    paddingVertical: paddingVerticalProp,
    position,
    right: rightProp,
    style: styleProp,
    top: topProp,
    width: widthProp,
    flex,
    ...restProps
  } = props;

  const margin = resolveToken(negativeSpace, marginProp);
  const marginBottom = resolveToken(negativeSpace, marginBottomProp);
  const marginHorizontal = resolveToken(negativeSpace, marginHorizontalProp);
  const marginLeft = resolveToken(negativeSpace, marginLeftProp);
  const marginRight = resolveToken(negativeSpace, marginRightProp);
  const marginTop = resolveToken(negativeSpace, marginTopProp);
  const marginVertical = resolveToken(negativeSpace, marginVerticalProp);

  const padding = resolveToken(space, paddingProp);
  const paddingBottom = resolveToken(space, paddingBottomProp);
  const paddingHorizontal = resolveToken(space, paddingHorizontalProp);
  const paddingLeft = resolveToken(space, paddingLeftProp);
  const paddingRight = resolveToken(space, paddingRightProp);
  const paddingTop = resolveToken(space, paddingTopProp);
  const paddingVertical = resolveToken(space, paddingVerticalProp);

  const bottom = resolveToken(positionSpace, bottomProp);
  const left = resolveToken(positionSpace, leftProp);
  const right = resolveToken(positionSpace, rightProp);
  const top = resolveToken(positionSpace, topProp);

  const width = resolveToken(widths, widthProp);
  const height = resolveToken(heights, heightProp);

  const styles = useMemo(() => {
    return {
      alignItems,
      borderBottomLeftRadius:
        borderBottomLeftRadius ??
        borderBottomRadius ??
        borderLeftRadius ??
        borderRadius,
      borderBottomRightRadius:
        borderBottomRightRadius ??
        borderBottomRadius ??
        borderRightRadius ??
        borderRadius,
      borderTopLeftRadius:
        borderTopLeftRadius ??
        borderTopRadius ??
        borderLeftRadius ??
        borderRadius,
      borderTopRightRadius:
        borderTopRightRadius ??
        borderTopRadius ??
        borderRightRadius ??
        borderRadius,
      bottom,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      left,
      margin,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      padding,
      paddingBottom,
      paddingHorizontal,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingVertical,
      position,
      right,
      top,
      width,
      flex,
      overflow,
    };
  }, [
    alignItems,
    borderBottomLeftRadius,
    borderBottomRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRadius,
    borderRightRadius,
    borderTopLeftRadius,
    borderTopRadius,
    borderTopRightRadius,
    bottom,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
    position,
    right,
    top,
    width,
    flex,
    overflow,
  ]);

  const style = useMemo(() => {
    const stylesArray = [styles, styleProp];
    return Component === View ? stylesArray : stylesArray.flat();
  }, [styles, styleProp, Component]);

  return (
    <ConditionalWrap
      condition={!!background}
      wrap={_children => (
        <ApplyShadow
          backgroundColor={background || colors.backgrounds.cardBackdrop}>
          <Component
            ref={ref}
            style={[
              {
                backgroundColor: background,
              },
              style,
            ]}
            {...restProps}>
            {_children}
          </Component>
        </ApplyShadow>
      )}>
      <Component ref={ref} style={style} {...restProps}>
        {children}
      </Component>
    </ConditionalWrap>
  );
});

export default Box;
