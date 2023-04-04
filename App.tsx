import { MainThemeProvider } from './src/theme/ThemeContext';
import React from 'react';
import Screen from '@/Components/Screen/Index';
import AppWrapper from '@/Components/AppWrapper/Index';
import Button from '@/SystemDesign/Components/Button/Index';
import { colors, metrics } from '@/styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import Text from '@/SystemDesign/Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import Card from '@/SystemDesign/Components/Card/Card';
import List from '@/SystemDesign/Components/List/List';

const App: React.FC = () => {
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
      subTitle:
        'Change language of the app to your preferred language, if not available, you can help us translate it',
      leftIconData: {
        render: ({ color, size }: any) => (
          <MaterialIcons name="language" size={size} color={color} />
        ),
        bgColor: colors.pink,
      },
    },
  ];
  return (
    <MainThemeProvider>
      <AppWrapper>
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
                    <Ionicons
                      name="md-qr-code-outline"
                      size={size}
                      color={color}
                    />
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
        </Screen>
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;

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
