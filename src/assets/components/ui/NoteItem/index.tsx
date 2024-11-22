import React from 'react';
import styles from './styles';
import {
  View,
  ViewStyle,
  Pressable,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {PropTypes} from 'mobx-react';
import {Divider} from 'react-native-paper';
import { useRootStore } from '../../../../core/hooks/useRootStore';

type PropTypes = {
  id: number;
  title: string;
  body: string;
  date: string;
  numberOfLines?: number;
  data:any;
};

const NoteItem: React.FC<PropTypes> = React.memo(
  ({id=0, title, body, date, numberOfLines, data}: PropTypes) => {
    const {noteStore} = useRootStore();
    // const renderItem = () => {
    //   return (
    //     <>
    //       <View style={styles.layout}>
    //         <View style={styles.header}>
    //           <View>
    //             <Text style={styles.title}>{title}</Text>
    //             <Text style={styles.date}>{date}</Text>
    //             <Text style={styles.date}>{id}</Text>
    //           </View>
    //           <Pressable> </Pressable>
    //         </View>
    //         <Divider style={styles.divider} />
    //         <Text style={styles.body} numberOfLines={numberOfLines}>
    //           {body}
    //         </Text>
    //       </View>
    //     </>
    //   );
    // };

    return (
     
        <View style={styles.layout}>
                 <View style={styles.header}>
                   <View style={styles.titleBlock}>
                     <Text style={styles.title}>{title}</Text>
                     <Text style={styles.date}>{date}</Text>
                     {/* <Text style={styles.date}>{id}</Text> */}
                   </View>
                   <Pressable onPress={() => noteStore.deleteNote(id)}><Text>X</Text></Pressable>
                 </View>
                 <Divider style={styles.divider} />
                 <Text style={styles.body} numberOfLines={numberOfLines}>
               {body}
               </Text>
             </View>
        
        // <FlatList renderItem={renderItem} data={data}  keyExtractor={item => item.id}/> 
    
    );
  },
);

NoteItem.defaultProps = {
  id: 0,
  title: '',
  body: '',
  date: '',
};
export default NoteItem;
