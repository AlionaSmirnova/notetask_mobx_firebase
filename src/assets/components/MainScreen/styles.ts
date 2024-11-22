import { StyleSheet } from "react-native";
import {scale} from 'react-native-size-matters';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
const colors = MD3LightTheme.colors;
export default StyleSheet.create({
    layout: {
        ...MD3LightTheme,
        flex: 1,
        backgroundColor: colors.primaryContainer,
      },
      welcome:{
        fontSize:scale(18),
        fontStyle:'italic',
        color: colors.onPrimaryContainer,
        textAlign:'center',
      },
      container:{
        marginVertical: scale(16),
        marginHorizontal: scale(16),
        alignItems:'center',
        justifyContent:'space-between',
      },
      additionalText:{
        textAlign:'center',
        marginTop:scale(10)
      },
      pressable:{
        width: scale(150),
        backgroundColor: '#ffff',
        height: scale(36),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.2,
        // marginHorizontal: scale(16),
        borderRadius: 10,
        marginVertical:scale(16),
      },
      pressText:{
        fontWeight: '600',
        color: colors.onPrimaryContainer
      },
      logoutContainer:{
        justifyContent:'flex-end',
        alignItems:'center'
      },
      pressLogout:{
        width: scale(150),
        backgroundColor: '#4B4376',
    
        height: scale(36),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.2,
        // marginHorizontal: scale(16),
        borderRadius: 10,
        marginVertical:scale(16),
        borderWidth:1,
      },
      noteBlock:{
        marginVertical: scale(10),
      },
      logoutText:{
        fontWeight: '600',
        color:'#ffff'
      },
      btnBlock:{
        flexDirection:'row',
        alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:scale(16)
      }
});