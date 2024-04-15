import React, { useEffect, useState } from 'react';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import TasksScreen from './Screens/TasksScreen';
import NewTask from './Screens/NewTask';
import WelcomeScreen from './Screens/WelcomeScreen';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// navigation stacks and tab
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const TasksStack = createNativeStackNavigator();
//const WelcomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



// navigators (designed like this to accomodate welcome screen only on first open and gesture control per tab as a stack)

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName='Home'>

      
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="NewTask" component={NewTask}  />
      
    </HomeStack.Navigator>
  );
}

// function WelcomeStackNavigator() {
//   return (
//     <WelcomeStack.Navigator >

//       <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      
      
//     </WelcomeStack.Navigator>
//   );
// }

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator initialRouteName='Settings'>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      
    </SettingsStack.Navigator>
  );
}

function TasksStackNavigator() {
  return (
    <TasksStack.Navigator initialRouteName='Tasks'>
      <TasksStack.Screen name="Tasks" component={TasksScreen} />
      <TasksStack.Screen name="NewTask" component={NewTask} />
      
    </TasksStack.Navigator>
  );
}

function MainPages() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: "purple" }}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: () => <Ionicons name='home' size={20}/> }}/>

      <Tab.Screen name="TasksStack" component={TasksStackNavigator} options={{ headerShown: false, tabBarLabel: 'Tasks', tabBarIcon: () => <Ionicons name='library' size={20}/> }}/>

      <Tab.Screen name="SettingsStack" component={SettingsStackNavigator} options={{ headerShown: false, tabBarLabel: 'Settings', tabBarIcon: () => <Ionicons name='cog' size={20}/> }}/>
      
    </Tab.Navigator>
  );
}

/////////////////////////////////////////////////////////////////
// main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  async function nameCheck() {

    console.log('is logged in :', isLoggedIn);
    try {
      const value = await AsyncStorage.getItem('username');
      if (value != '' && value != null) {
        setUsername(value);
        setIsLoggedIn(true);
        console.log('value:', value);
        console.log('username:', username);
        console.log('namecheck ran GOOD');
      }
      else {
        
        console.log('namecheck ran BAD');
      }
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    nameCheck();
  }, [username]);

  return (
    <NavigationContainer>
      
      {isLoggedIn ? <MainPages /> : <WelcomeScreen nameCheck={nameCheck} />}
    </NavigationContainer>
  );
};

export default App;
