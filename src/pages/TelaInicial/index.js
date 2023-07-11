import {  Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo.png';
import mesa from '../../../assets/inicio-mesa.png';
import botao from '../../../assets/botao.png';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.flex1}>
        <Image source={logo} style={styles.logo} /> 
      </View>

      <View style={styles.flex2}>

        <View>
          <Image source={mesa} style={styles.mesa} />
        </View>

        <View>
          <TouchableOpacity 
            onPress = {() => navigation.navigate("SelecaoModulos")}>
            <Image source={botao} style={styles.botao} />
          </TouchableOpacity> 
          
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99CDEB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 425,
    height: 250,
    marginBottom: -170,
    // marginTop: -70,
  },

  botao: {
    width: 100,
    height: 100,
    marginTop: 250,
    marginRight: 70,
    // marginBottom: 140,
    // marginTop: -70,
  },
  
  mesa: {
    width: 350,
    height: 350,
    marginRight: 60,
    marginTop: 150,
  },

  flex1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flex2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // flex2_1: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  //   alignItems: 'center',
  //   justifyContent: 'right',
  // },




});
