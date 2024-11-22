import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

const colors = MD3LightTheme.colors;

export default StyleSheet.create({
  layout: {
    ...MD3LightTheme,
    flex: 1,
    backgroundColor: colors.primaryContainer,
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
    // marginBottom: scale(90),
    marginHorizontal:scale(16),
  },
  btnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: scale(16),
    marginVertical: scale(24),
    borderRadius: 10,
    opacity: 0.8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    paddingVertical: scale(4),
  },
  input: {
    width: scale(250),
    height: scale(36),
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginVertical:scale(5)
  },
  pressable: {
    width: scale(180),
    backgroundColor: '#ffff',
    height: scale(36),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    marginHorizontal: scale(16),
    borderRadius: 10,

    //    flexDirection:'row'
  },
  pressContainer: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: scale(80),
    height:scale(130),

  },
  pressaDisabled:{
backgroundColor:'grey',
width: scale(180),
height: scale(36),
alignItems: 'center',
justifyContent: 'center',
shadowOpacity: 0.2,
marginHorizontal: scale(16),
borderRadius: 10,
  },
  pressText:{
    fontWeight: '600',
    color: colors.onPrimaryContainer
  },
  loginMsg:{
    fontSize:scale(18),
    fontStyle:'italic',
    color: colors.onPrimaryContainer,
    textAlign:'center',
    marginVertical:scale(8),
  }
});
