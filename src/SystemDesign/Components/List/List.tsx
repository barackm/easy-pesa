import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import ListItem from '../ListItem/ListItem';
import ItemSeparator from './ItemSeparator';

interface ListProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
  data: T[];
  renderItem?: ({ item }: { item: T }) => React.ReactElement;
}

const List = <T extends any>(props: ListProps<T>) => {
  const { data, renderItem, ...rest } = props;
  return (
    <FlatList
      data={data}
      {...rest}
      renderItem={({ item }: any) =>
        renderItem ? (
          renderItem({ item })
        ) : (
          <ListItem
            title={item.title}
            leftIconData={item.leftIconData}
            renderLeftContent={item.renderLeftContent}
            renderRightContent={item.renderRightContent}
            subTitle={item.subTitle}
          />
        )
      }
      ItemSeparatorComponent={() => <ItemSeparator />}
    />
  );
};

export default List;
