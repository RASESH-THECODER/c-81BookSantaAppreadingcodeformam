import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNaviator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
 Drawer:{screen:AppDrawerNaviator}
})

const AppContainer =  createAppContainer(switchNavigator);
