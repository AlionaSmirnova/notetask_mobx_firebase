import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import SignUpScreen from '../components/SignUpScreen';

import NoteScreen from '../components/NoteScreen';

export type MainStackParamsList={
Login: undefined;
SignUp: undefined;
Main: undefined;
NoteScreen: undefined;
HomeStack: undefined;
MapMode: undefined;

}
const Stack= createNativeStackNavigator<MainStackParamsList>();

const HomeStack = createNativeStackNavigator();
function RootStack(){


  const MainScreenRightHeader = {
   
     headerRight: (props:any) => (
       <TouchableOpacity>
   <Text>Go to Map Mode</Text>
       </TouchableOpacity>
     ),
     headerBackVisible:false,
    
     gestureEnabled: false,
   };


    return(
        <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name='Login' component={LoginScreen} options={{headerBackVisible:false}}/>
    <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerTitle:'Sign Up'}}/>
    <Stack.Screen name='Main' component={MainScreen} options={MainScreenRightHeader}/>
    <Stack.Screen name='NoteScreen' component={NoteScreen} options={{headerBackVisible:false}}/>
        </Stack.Navigator>
    );
}

export default function App() {
    return (
      <NavigationContainer>
        <RootStack>
          </RootStack>
      </NavigationContainer>
    );
  }


// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LoginScreen from '../components/LoginScreen';
// import MainScreen from '../components/MainScreen';
// import NoteScreen from '../components/NoteScreen';

// export type MainStackParamsList={
// Login: undefined;
// SignUp: undefined;
// Main: undefined;
// NoteScreen: undefined;
// AuthStack: undefined;
// MainStack:undefined;
// }

// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Home screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// // function SettingsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Settings screen</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={() => navigation.navigate('Details')}
// //       />
// //     </View>
// //   );
// // }

// const AuthStack = createNativeStackNavigator<MainStackParamsList>();

// function AuthStackScreen() {
//   return (
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="Login" component={LoginScreen} />
//     </AuthStack.Navigator>
//   );
// }

// const MainStack = createNativeStackNavigator<MainStackParamsList>();

// function MainStackScreen() {
//   return (
//     <MainStack.Navigator>
//        <MainStack.Screen name="Main" component={MainScreen}  options={{headerBackVisible:false}} />
//        <MainStack.Screen name="NoteScreen" component={NoteScreen} />
//     </MainStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator<MainStackParamsList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="AuthStack" component={AuthStackScreen}/>
//         <Tab.Screen name="MainStack" component={MainStackScreen}  /> 
    
  
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }