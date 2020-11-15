import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { SystemColors } from './constants/Colors';
import RootNavigation from './navigation/RootNavigation';
import configureStore from './redux/configureStore';

const store = configureStore().store
const App: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: SystemColors.darkBG }} />
      <StatusBar barStyle='light-content' />
      <Provider store={store} >
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;