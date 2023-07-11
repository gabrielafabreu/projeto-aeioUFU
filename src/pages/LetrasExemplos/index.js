import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';

export default function App() {
  const [letra,setLetra] = useState();

  useEffect(() => {
    letraSelecionada();
  },[]);
  
  const letraSelecionada = async() => {

    
    let letraAtual = await AsyncStorage.getItem('letra');

    setLetra(letraAtual);
    console.log(letraAtual);

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores)

    return;
  };

  return (
    <View style={styles.container}>
      <Text>Letra selecionada: {letra}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});