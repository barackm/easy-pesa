import Button from '@/SystemDesign/Components/Button/Button';
import { colors } from '@/styles';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screen from '@/Components/Screen/Index';
import { Box, Inline, List, MenuItem, Stack, Text } from '@/SystemDesign/Index';
import { MenuItemProps } from '@/SystemDesign/Components/MenuItem/MenuItem';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [switched, setSwitched] = React.useState(false);

  const list: MenuItemProps[] = [
    {
      id: 4,
      titleComponent: <MenuItem.Title text="Notifications" />,
      labelComponent: (
        <MenuItem.SubTitle text="Please turn on or off notifications for this app, so you can receive notifications" />
      ),
      size: 40,
      hasRightChevron: false,
      hasRightSwitch: true,
      leftComponent: null,
      rightComponent: null,
      isSelected: false,
      onSwitchChange: () => {
        console.log('switched');
        setSwitched(!switched);
      },
      switchValue: switched,
      onPress() {
        console.log('pressed');
      },
    },
    {
      id: 1,
      titleComponent: <MenuItem.Title text="Receive assets" />,
      labelComponent: '',
      size: 40,
      hasRightChevron: true,
      hasRightSwitch: false,
      leftComponent: null,
      rightComponent: null,
      isSelected: false,
    },
    {
      id: 2,
      titleComponent: <MenuItem.Title text="Receive assets" />,
      labelComponent: '',
      size: 40,
      hasRightChevron: false,
      hasRightSwitch: false,
      leftComponent: null,
      rightComponent: null,
      isSelected: true,
    },
    {
      id: 3,
      titleComponent: <MenuItem.Title text="Receive assets" />,
      labelComponent: '',
      size: 40,
      hasRightChevron: false,
      hasRightSwitch: false,
      leftComponent: null,
      rightComponent: null,
      isSelected: false,
      hasRightArrow: true,
    },
  ];

  return (
    <Screen>
      <Stack space="20">
        <Box
          background={colors.white}
          paddingHorizontal="8"
          paddingVertical="8"
          borderRadius={12}
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
                autoWidth
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
          borderRadius={12}
          width="full">
          <List scrollEnabled={false} data={list} />
        </Box>
      </Stack>
    </Screen>
  );
};

export default HomeScreen;
