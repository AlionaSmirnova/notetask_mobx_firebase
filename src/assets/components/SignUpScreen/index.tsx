import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainStackParamsList} from '../../navigation';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'Login'
>;

type PropTypes = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<PropTypes> = React.memo(
  ({navigation}: PropTypes) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const usersCollection = firestore().collection('users');

    type UserType = {
      first_name: null | string;
      last_name: null | string;
      username: null | string;
      last_activity: Date;
      password: null | string;
      email: null | string;
    };
    const [user, setUser] = useState<UserType>({
      first_name: null,
      last_name: null,
      username: null,
      last_activity: new Date(),
      password: null,
      email: null,
    });

    const [message, setMessage] = useState('');

    const setUserData = (key: string, value: string) => {
      setUser(prevState => ({
        ...prevState,
        [key]: value,
      }));
    };

    const createUser = () => {
      if (!user.email || user.email?.length <= 5) {
        setMessage('Email must contain minimum 5 symbols!');
        return false;
      }

      if (!user.password || user.password?.length <= 5) {
        setMessage('Password must contain minimum 5 symbols!');
        return false;
      }
      auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(response => {
         usersCollection.doc(response.user.uid).set({
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                last_activity: user.last_activity,
                email: user.email,
                id: response.user.uid,
              })
              .then(() => {
                console.log('success');
                setMessage('User account created & signed in!');
                setTimeout(() => {
                  navigation.navigate('Main');
                }, 1500);
              })
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setMessage('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            setMessage('That email address is invalid!');
          }
          console.error(error);
        });
      };

    return (
      <View style={styles.layout}>
        <SafeAreaView style={styles.container}>
          <View style={styles.btnContainer}>
            <TextInput
              style={styles.input}
              autoFocus={true}
              placeholder="enter your first name"
              value={user.first_name || ''}
              onChangeText={(value: string) => setUserData('first_name', value)}
            />
            <TextInput
              style={styles.input}
              value={user.last_name || ''}
              placeholder="enter your last name"
              onChangeText={(value: string) => setUserData('last_name', value)}
            />
            <TextInput
              style={styles.input}
              value={user.username || ''}
              placeholder="enter the username"
              onChangeText={(value: string) => setUserData('username', value)}
            />

            <TextInput
              style={styles.input}
              placeholder="enter the email"
              textContentType="emailAddress"
              value={user.email || ''}
              onChangeText={(value: string) => setUserData('email', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="enter the password"
              textContentType="password"
              secureTextEntry={true}
              value={user.password || ''}
              onChangeText={(value: string) => setUserData('password', value)}
            />
            <Text style={styles.success}>{message}</Text>
          </View>
          <View style={styles.pressContainer}>
            <Pressable style={styles.pressable} onPress={() => createUser()}>
              <Text style={styles.pressText}>Create account</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    );
  },
);
export default SignUpScreen;
