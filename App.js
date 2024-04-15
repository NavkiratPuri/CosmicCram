import React, { useEffect, useState } from 'react';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

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
const WelcomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



// navigators (designed like this to accomodate welcome screen only on first open and gesture control per tab as a stack)

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator >

      
      <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="NewTask" component={NewTask} options={{headerShown: false}} />
      
    </HomeStack.Navigator>
  );
}

function WelcomeStackNavigator() {
  return (
    <WelcomeStack.Navigator >

      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      
      
    </WelcomeStack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsStack" component={SettingsScreen} />
      
    </SettingsStack.Navigator>
  );
}

function TasksStackNavigator() {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen name="TasksStack" component={TasksScreen} />
      
    </TasksStack.Navigator>
  );
}

function MainPages() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Tasks" component={TasksStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
      
    </Tab.Navigator>
  );
}

/////////////////////////////////////////////////////////////////
// main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  async function nameCheck() {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value == 'Nav') {
        setUsername(value);
        setIsLoggedIn(true);
        console.log('value:', value);
        console.log('username:', username);
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
