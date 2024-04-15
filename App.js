import React from 'react';

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


const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const TasksStack = createNativeStackNavigator();


function HomeStackNavigator() {
  return (
    <HomeStack.Navigator >

      <HomeStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="NewTask" component={NewTask} options={{headerShown: false}} />
      
    </HomeStack.Navigator>
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

const App = () => {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Tasks" component={TasksStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsStackNavigator} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
