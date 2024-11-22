import * as React from 'react';
import { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import {observer} from 'mobx-react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainStackParamsList} from '../../navigation';
import styles from './styles';
import {useRootStore} from '../../../core/hooks/useRootStore';
import NoteItem from '../ui/NoteItem';
import { RouteProp, useRoute } from '@react-navigation/native';

import { firebase } from '@react-native-firebase/auth';


import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
type MainScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'Login'
>;

type PropTypes = {
  navigation: MainScreenNavigationProp;
};

const MainScreen: React.FC<PropTypes> = 
  ({navigation, }: PropTypes) => {

    const route = useRoute<RouteProp<MainStackParamsList, 'Main'>>();
    const {noteStore} = useRootStore();
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };



    const onPressLogout =React.useCallback(async() => {
      try {
        await firebase.auth().signOut();
        navigation.navigate('Login');
    } catch (e) {
        console.log(e);
    }
    },[]);

    return (
      <View style={styles.layout}>  
      <ScrollView style={{ flex: 1 }}> 
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.container}>
          <Text style={styles.welcome}> Welcome to the Note App!  </Text>
       
          {noteStore.noteArray.length ? (
            <View style={styles.noteBlock}>
              {noteStore.noteArray.length &&
                noteStore.noteArray.map((item, i) => {
                  return (
                    <NoteItem
                    key={i}
                      id={item.id}
                      title={item.title}
                      body={item.body}
                      date={item.date}
                      data={noteStore.noteArray}
                    />
                  );
                })}
            </View>
            
          ) : (
            <Text style={styles.additionalText}>
              *You haven't created any notes yet!
            </Text>
          )}
        
        </View>
        <View style={styles.btnBlock}> 
        <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate('NoteScreen')}>
            <Text style={styles.pressText}>Create Note</Text>
          </Pressable>

        <View style={styles.logoutContainer}>
          <Pressable style={styles.pressLogout} onPress={() => onPressLogout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
        </View> 
        </ScrollView>
      </View>
    );
  };

export default observer(MainScreen);
