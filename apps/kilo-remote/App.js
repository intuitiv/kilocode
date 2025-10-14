import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import ChatView from './src/components/ChatView';
import HistoryView from './src/components/HistoryView';
import HomeScreen from './src/components/HomeScreen';
import HeaderTitle from './src/components/HeaderTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider } from './src/context/ThemeContext';
import { useTheme } from './src/hooks/useTheme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function DisconnectButton() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 10 }}>
      <Icon name="power-off" size={24} color={theme.accent} />
    </TouchableOpacity>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatMain" component={ChatView} options={{ headerShown: false }} />
      <Stack.Screen name="ChatDetail" component={ChatView} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'ChatTab') {
            iconName = 'comment';
          } else if (route.name === 'History') {
            iconName = 'history';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.background },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.dim,
      })}
    >
      <Tab.Screen name="ChatTab" component={ChatStack} options={{ title: 'Chat' }} />
      <Tab.Screen name="History" component={HistoryView} />
    </Tab.Navigator>
  );
}

const AppContent = () => {
  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'Orbitron-Regular': require('./assets/fonts/Orbitron-Regular.ttf'),
    'IBMPlexSerif-Regular': require('./assets/fonts/IBMPlexSerif-Regular.ttf'),
  });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
    },
  };

  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            headerTitle: () => <HeaderTitle />,
            headerRight: () => <DisconnectButton />,
            headerLeft: () => null,
            headerStyle: { backgroundColor: theme.background },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
