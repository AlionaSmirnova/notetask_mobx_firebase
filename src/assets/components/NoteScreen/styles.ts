import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
const colors = MD3LightTheme.colors;
export default StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.primaryContainer,
  },
  welcome: {
    fontSize: scale(18),
    fontStyle: 'italic',
    color: colors.onPrimaryContainer,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginVertical: scale(16),
    marginHorizontal: scale(16),
    width: scale(300),
    height: scale(300),
    flexDirection: 'column',
    alignItems: 'center',
  },
  additionalText: {
    textAlign: 'center',
    marginTop: scale(10),
  },
  pressable: {
    width: scale(150),
    backgroundColor: '#ffff',
    height: scale(36),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    marginHorizontal: scale(16),
    borderRadius: 10,
    marginVertical: scale(16),
    borderWidth: 1,
    borderColor: colors.onPrimaryContainer,
  },
  pressableDel: {
    width: scale(150),
    backgroundColor: 'rgb(186, 26, 26)',
    height: scale(36),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    marginHorizontal: scale(16),
    borderRadius: 10,
    marginVertical: scale(16),
    borderWidth: 1,
    borderColor: colors.onPrimaryContainer,
  },
  delText: {
    color: '#ffff',
  },
  header: {
    fontWeight: '400',
    color: colors.onPrimaryContainer,
    fontSize: scale(16),
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: scale(16),
  },
  logoutContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pressLogout: {
    width: scale(180),
    backgroundColor: 'transparent',
    height: scale(36),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    marginHorizontal: scale(16),
    borderRadius: 10,
    marginVertical: scale(16),
  },
  input: {
    width: scale(260),
    height: scale(36),
    borderWidth: 1,
    borderColor: colors.onPrimaryContainer,
    marginVertical: scale(5),
    borderRadius: 8,
  },
  inputText:{
    width: scale(260),
    height: scale(70),
    borderWidth: 1,
    borderColor: colors.onPrimaryContainer,
    marginVertical: scale(5),
    borderRadius: 8,
    padding:0,

  },
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:scale(16),
    justifyContent:'center'
  }
});
