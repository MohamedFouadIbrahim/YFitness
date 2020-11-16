import React from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { SystemColors } from './constants/Colors';
import LanguageInitializer from './LanguageInitializer';
import RootNavigation from './navigation/RootNavigation';
import configureStore from './redux/configureStore';

const store = configureStore().store
const App: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: SystemColors.darkBG }} />
      <StatusBar barStyle='light-content' />
      <Provider store={store} >
        <LocalizeProvider store={store} >
          <RootNavigation />
          <LanguageInitializer />
        </LocalizeProvider>
      </Provider>
    </>
  );
};

export default App;