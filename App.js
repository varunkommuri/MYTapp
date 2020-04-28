// install react-navigation
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
//TODO: import four screens

import materialScreen from './assets/screens/materialScreen';
import homeScreen from './assets/screens/homeScreen';
import videoScreen from './assets/screens/videoScreen';
import announcementScreen from './assets/screens/announcementScreen';
import contactScreen from './assets/screens/contactScreen';
//TODO: import firebase
//import * as firebase from 'firebase';
// set up react navigation


const MainNavigator = createStackNavigator(
  { Home: { screen: homeScreen},
    Materials: { screen: materialScreen },
    Videos: {screen: videoScreen},
    Announcements: {screen: announcementScreen},
    Contact: {screen: contactScreen}
    
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;