import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatView from './src/components/ChatView';
import HistoryView from './src/components/HistoryView';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = 'comment';
            } else if (route.name === 'History') {
              iconName = 'history';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Chat" component={ChatView} />
        <Tab.Screen name="History" component={HistoryView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
