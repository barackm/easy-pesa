import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import ItemSeparator from './ItemSeparator';
import MenuItem from '../MenuItem/MenuItem';

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
          <MenuItem titleComponent={<MenuItem.Title text="There we go" />} />
        )
      }
      ItemSeparatorComponent={() => <ItemSeparator />}
    />
  );
};

export default List;
