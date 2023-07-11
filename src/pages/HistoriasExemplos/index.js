import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

    const [historia, setHistoria] = useState();

    useEffect(() => {
        historiaSelecionada();
    },[]);
  
  const historiaSelecionada = async() => {
    
    let historiaAtual = await AsyncStorage.getItem('historia');

    setHistoria(historiaAtual);
    console.log(historiaAtual);

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores)

    return;
  };

  return (
    <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity 
            style = {styles.seta}
            onPress = {() => navigation.goBack()}
            >
            <Feather name="chevron-left" size={38} color="#cf1e2b" />
            </TouchableOpacity>

            <Text style={styles.titulo}>Histórias com a letra {historia}</Text>

            <TouchableOpacity 
            style = {styles.seta}
            onPress = {() => navigation.goBack()}
            >
            <Feather name="alert-circle" size={30} color="#cf1e2b" style={{marginTop: 5}}/>
            </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity 
            // onPress = {() => (i = i + 1) & selecionaLetra("7")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/historia_1.png')} style={styles.imagem}/>

          </TouchableOpacity> 

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#99CDEB',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: '10%'
    },
  
    header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '98%',
      marginRight: '1%',
      marginLeft: '1%',
    },
  
    titulo:{
      color: '#cf1e2b',
      marginTop: '10%',
      marginBottom: '10%',
      fontWeight: "bold",
      fontSize:28,
    },
  
    card:{
      backgroundColor: 'white',
      borderRadius: 20,
      width: 350,
      height: 640,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginLeft: '5%',
      marginBottom: '5%',
    },
    
    imagem:{
        width: 350,
        height: 600,
        alignContent: 'center',
        justifyContent: 'center',
    },
  });