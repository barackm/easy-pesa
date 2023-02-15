import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
// import { account, databases } from './appwrite/appwriteConfig';
// import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  React.useEffect(() => {
    // const testDb = databases.getDocument('60a1b1b0e4b0b');
    // const testCollection = testDb.collection('test');
    // console.log(testCollection, 'testCollection');
    // console.log(account, 'account');
  }, []);
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
