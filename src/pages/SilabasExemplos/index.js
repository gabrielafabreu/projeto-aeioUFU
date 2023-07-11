import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';

export default function App() {
  const [silaba,setSilaba] = useState();

  useEffect(() => {
    silabaSelecionada();
  },[]);
  
  const silabaSelecionada = async() => {

    
    let silabaAtual = await AsyncStorage.getItem('silaba');

    setSilaba(silabaAtual);
    console.log(silabaAtual);

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores)

    return;
  };

  return (
    <View style={styles.container}>
      <Text>Sílaba selecionada: {silaba}</Text>
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