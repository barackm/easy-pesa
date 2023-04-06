import Button from '@/SystemDesign/Components/Button/Index';
import { colors, metrics } from '@/styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screen from '@/Components/Screen/Index';
import Card from '@/SystemDesign/Components/Card/Card';
import Text from '@/SystemDesign/Components/Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import List from '@/SystemDesign/Components/List/List';
import TextInput from '@/SystemDesign/Components/TextInput/TextInput';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const list = [
    {
      title: 'Backup',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialIcons name="refresh" size={size} color={color} />
        ),
        bgColor: colors.red,
      },
      actions: {
        onClick: () => {},
      },
    },
    {
      title: 'Security',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialCommunityIcons
            name="shield-key-outline"
            size={size}
            color={color}
          />
        ),
        onClick: () => {},
        bgColor: colors.appleBlue,
      },
    },
    {
      title: 'Currency',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialIcons name="attach-money" size={size} color={color} />
        ),
        bgColor: colors.green,
      },
    },
    {
      title: 'Notifications',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialIcons name="notifications" size={size} color={color} />
        ),
        bgColor: colors.yellow,
      },
    },
    {
      title: 'Language',
      subTitle: '',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialIcons name="language" size={size} color={color} />
        ),
        bgColor: colors.pink,
      },
    },
  ];

  return (
    <Screen>
      <Card>
        <View style={styles.cardHeader}>
          <View style={styles.cardTextContainer}>
            <Text variant={TextVariant.headingBold}>Receive assets</Text>
            <Text capitalize style={styles.cardTextBody}>
              You can also long press your address above to copy it
            </Text>
          </View>
          <View style={styles.qrCodeContainer}>
            <Button
              variant="default"
              isIconBtn
              color={colors.backgrounds.red}
              size="small">
              {({ size, color }) => (
                <Ionicons name="md-qr-code-outline" size={size} color={color} />
              )}
            </Button>
          </View>
        </View>
        <View style={styles.cardFooter}>
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
        </View>
      </Card>
      <Card isNotAList={false}>
        <List
          data={list}
          bounces={false}
          keyExtractor={(item, index) => item.title + index}
        />
      </Card>
      <Card>
        <TextInput
          placeholder="Enter email"
          autoCapitalize="none"
          label="Email"
        />
        <TextInput
          placeholder="Enter email"
          label="Password"
          error="Should have at least a special character"
        />
      </Card>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardMainContainer: {
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    backgroundColor: colors.white,
    padding: metrics.moderateScale(14),
    borderRadius: metrics.moderateScale(14),
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: metrics.moderateScale(10),
  },
  cardTextContainer: {
    flex: 3,
  },
  qrCodeContainer: {},
  cardFooter: {},
  cardText: {
    fontWeight: 'bold',
    fontSize: metrics.moderateScale(20),
    marginBottom: metrics.moderateScale(5),
    fontFamily: 'SF Pro Rounded',
  },
  cardTextBody: {
    width: '60%',
    marginTop: metrics.moderateScale(5),
  },
});
