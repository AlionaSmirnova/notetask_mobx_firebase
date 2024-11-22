import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  Pressable,
} from 'react-native';

import {TextInput, useTheme} from 'react-native-paper';
import styles from './styles';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainStackParamsList} from '../../navigation/index';
import auth from '@react-native-firebase/auth';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'Login'
>;

type PropTypes = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<PropTypes> = React.memo(
  ({navigation}: PropTypes) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [msg, setMsg] = useState('');

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    return (
      <View style={styles.layout}>
        <SafeAreaView style={styles.container}>

             <Text style={styles.loginMsg}>{(!user) ? "Looks like you don't have an account! Please create account!" :`Looks like you already have an account! Welcome ${user.email}`}</Text>

          <View style={styles.pressContainer}> 
          <Pressable style={[user? styles.pressable  : styles.pressaDisabled]}
          disabled={!user}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.pressText}> Go to Main Screen</Text>
          </Pressable>

          <Pressable style={[!user? styles.pressable  : styles.pressaDisabled]} disabled={!!user} onPress={() => navigation.navigate('SignUp')
          }>
            <Text style={styles.pressText}>Sign Up</Text>
          </Pressable>
          </View>
       
        </SafeAreaView>
      </View>
    );
  },
);
export default LoginScreen;
