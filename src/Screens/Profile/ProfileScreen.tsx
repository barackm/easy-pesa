import React from 'react';
import LockIcon from '@/Components/Icons/LockIcon';
import UserIcon from '@/Components/Icons/UserIcon';
import Screen from '@/Components/Screen/Index';
import Card from '@/SystemDesign/Components/Card/Card';
import TextInput from '@/SystemDesign/Components/TextInput/TextInput';
import { TouchableOpacity, View } from 'react-native';
import Text from '@/SystemDesign/Components/Text/Index';
import { TextVariant } from '@/hooks/styles/useTextStyles';
import Popover from '@/SystemDesign/Components/Popover/Popover';

const ProfileScreen: React.FC = () => {
  const viewRef = React.useRef<any>(null);
  const [showPopover, setShowPopover] = React.useState(false);
  return (
    <>
      <Popover
        target={viewRef}
        onClose={() => setShowPopover(false)}
        open={showPopover}>
        <View>
          <Text variant={TextVariant.headingMedium}>'</Text>
        </View>
      </Popover>
      <Screen>
        <TouchableOpacity ref={viewRef} onPress={() => setShowPopover(true)}>
          <Text variant={TextVariant.headingMedium}>Open Popover</Text>
        </TouchableOpacity>

        <Card>
          <TextInput
            placeholder="Enter Email"
            autoCapitalize="none"
            label="Email"
            startIcon={({ color, scale }) => (
              <UserIcon color={color} scale={scale} />
            )}
          />
          <TextInput
            placeholder="Enter Password"
            label="Password"
            startIcon={({ color, scale }) => (
              <LockIcon color={color} scale={scale} />
            )}
            secureTextEntry
          />
          <TextInput
            placeholder="Enter Message"
            label="Message"
            numberOfLines={10}
            multiline
            error="Error"
          />
        </Card>
      </Screen>
    </>
  );
};

export default ProfileScreen;
