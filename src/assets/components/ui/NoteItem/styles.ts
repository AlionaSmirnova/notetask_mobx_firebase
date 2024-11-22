import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  layout: {
    backgroundColor: '#EBEAFF',
    marginHorizontal: scale(16),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: scale(10),
    paddingVertical: scale(6),
    justifyContent: 'flex-start',
    width:scale(280),
    marginVertical:scale(4)
  },
  title: {
    fontSize: scale(14),
    fontStyle: 'italic',
    color: 'black',
  },
  body: {
    fontSize: scale(18),
  },
  date: {
    fontSize: scale(11),
    color: 'grey',
  },
  divider: {
    color: 'black',
    height: 2,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  titleBlock:{
    flexDirection:'column',
    marginVertical:scale(2),
// alignItems:'stretch'
  }
});
