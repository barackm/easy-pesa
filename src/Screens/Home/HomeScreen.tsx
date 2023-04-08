import Button from '@/SystemDesign/Components/Button/Button';
import { colors } from '@/styles';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screen from '@/Components/Screen/Index';
import { Box, Inline, List, MenuItem, Stack, Text } from '@/SystemDesign/Index';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const list = [
    {
      id: 1,
      titleComponent: <MenuItem.Title text="Receive assets" />,
      labelComponent: '',
      size: 50,
      hasRightChevron: false,
      hasRightSwitch: false,
      leftComponent: null,
      rightComponent: null,
      isSelected: false,
    },
    {
      id: 2,
      titleComponent: <MenuItem.Title text="Receive assets" />,
      labelComponent: '',
      size: 50,
      hasRightChevron: false,
      hasRightSwitch: false,
      leftComponent: null,
      rightComponent: null,
      isSelected: false,
    },
  ];

  return (
    <Screen>
      <Stack space="20">
        <Box
          background={colors.white}
          paddingHorizontal="8"
          paddingVertical="8"
          borderRadius={20}
          shadow={colors.dark}
          width="full">
          <Stack space="24">
            <Inline alignVertical="top" space="20">
              <Box flex={1}>
                <Stack space="5">
                  <Text size="larger" weight="bold">
                    Receive assets
                  </Text>
                  <Text size="smedium">
                    You can also long press your address above to copy it
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Button
                  variant="default"
                  isIconBtn
                  color={colors.backgrounds.red}
                  size="small">
                  {({ size, color }) => (
                    <Ionicons
                      name="md-qr-code-outline"
                      size={size}
                      color={color}
                    />
                  )}
                </Button>
              </Box>
            </Inline>
            <Box>
              <Button
                variant="text"
                color={colors.backgrounds.red}
                size="small"
                showShadow={false}
                startIcon={({ size, color }) => (
                  <Feather name="copy" size={size} color={color} />
                )}>
                Copy Address
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          background={colors.white}
          shadow={colors.dark}
          borderRadius={20}
          width="full">
          <List data={list} />
        </Box>
      </Stack>
    </Screen>
  );
};

export default HomeScreen;
