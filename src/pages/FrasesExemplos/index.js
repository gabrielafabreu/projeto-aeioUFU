import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    
  const [frase,setFrase] = useState();

  useEffect(() => {
    fraseSelecionada();
  },[]);
  
  const fraseSelecionada = async() => {
    
    let fraseAtual = await AsyncStorage.getItem('frase');

    setFrase(fraseAtual);
    console.log(fraseAtual);

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

            <Text style={styles.titulo}>Frases com a letra {frase}</Text>

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
            
            <Image source={require('../../../assets/frase_1.png')} style={styles.imagem}/>

          </TouchableOpacity> 

          <TouchableOpacity 
            // onPress = {() => (i = i + 1) & selecionaLetra("7")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/frase_2.png')} style={styles.imagem}/>

          </TouchableOpacity> 

          
          <TouchableOpacity 
            // onPress = {() => (i = i + 1) & selecionaLetra("7")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/frase_3.png')} style={styles.imagem}/>

          </TouchableOpacity> 

          <TouchableOpacity 
            // onPress = {() => (i = i + 1) & selecionaLetra("7")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/frase_4.png')} style={styles.imagem}/>

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
      fontSize:35,
    },
  
    card:{
      backgroundColor: 'white',
      borderRadius: 20,
      width: 350,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      marginLeft: '5%',
      marginBottom: '5%',
    },
    
    imagem:{
        width: 300,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
    },
  });