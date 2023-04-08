import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Stack from '../Stack/Stack';

interface MenuProps {
  children: React.ReactNode;
  header?: string;
  description?: string;
}

const Menu: React.FC<MenuProps> = props => {
  const { children, header, description } = props;
  return (
    <>
      {!!header && (
        <Box paddingBottom="12" paddingHorizontal={{ custom: 16 }}>
          <Text color="black" size="smedium" weight="regular">
            {header}
          </Text>
        </Box>
      )}
      <Box borderRadius={18} width="full">
        <Stack>{children}</Stack>
      </Box>
      {!!description && (
        <Box paddingHorizontal={{ custom: 16 }} paddingTop={{ custom: 17 }}>
          <Text color="black" size="small" weight="regular">
            {description}
          </Text>
        </Box>
      )}
    </>
  );
};

export default Menu;
