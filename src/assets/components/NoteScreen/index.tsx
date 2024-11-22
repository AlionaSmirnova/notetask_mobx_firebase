import * as React from 'react';
import {useState, useEffect, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';

import {TextInput, useTheme} from 'react-native-paper';
import styles from './styles';
import {observer} from 'mobx-react';
import {MainStackParamsList} from '../../navigation/index';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import { useRootStore } from '../../../core/hooks/useRootStore';

type NoteScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'NoteScreen'
>;

type PropTypes = {
  navigation: NoteScreenNavigationProp;
};

const NoteScreen: React.FC<PropTypes> = ({navigation}: PropTypes) => {

  const {noteStore} = useRootStore();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    clearFields();

  }, []);

const clearFields =() =>{
setTitle('');
setBody('');
};


  const onPressSave = useCallback(() =>{
noteStore.addNoteToArray(id+1, title, body, date.toDateString());
setTimeout(() =>{
clearFields();
navigation.navigate('Main');
}, 2000);
  },[id, body, title, date]);

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>
        Please fill in all fields to create a new note!
      </Text>

      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="title"
            value={title}
            onChangeText={value => setTitle(value)}></TextInput>
          <TextInput
            style={styles.inputText}
            numberOfLines={4}
            multiline
            placeholder="text"
            value={body}
            onChangeText={value => setBody(value)}></TextInput>
          <TextInput
            style={styles.input}
            disabled
            placeholder="date"
            value={date.toDateString()}></TextInput>
        </View>
      </SafeAreaView>

      <View style={styles.btnContainer}>
        <Pressable style={styles.pressable} onPress={()=>onPressSave()}>
          <Text>Save</Text>
        </Pressable>
        {/* <Pressable style={styles.pressableDel}>
          <Text style={styles.delText}>Delete</Text>
        </Pressable> */}
          <Pressable style={styles.pressableDel} onPress={clearFields}>
          <Text style={styles.delText}>Clear fields</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default observer(NoteScreen);
