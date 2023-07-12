import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';

export default function App() {
  const [palavra,setPalavra] = useState();

  useEffect(() => {
    palavraSelecionada();
  },[]);
  
  const palavraSelecionada = async() => {

    
    let palavraAtual = await AsyncStorage.getItem('palavra');

    setPalavra(palavraAtual);
    console.log(palavraAtual);

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores)

    return;
  };

  return (
    <View style={styles.container}>
      <Text>Palavras com a letra: {palavra}</Text>
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