import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';
import * as Audio from 'expo-speech';

export default function App() {
  const [letra,setLetra] = useState();
  const [texto,setTexto] = useState();

  useEffect(() => {
    letraSelecionada();
  },[]);

  const speak = () => {
    Audio.speak(texto, {
      language: "pt-BR"
    });
  };

  const isLetter = (variable) => {
    return /^[a-zA-Z]$/.test(variable);
  };

  const isNumber = (variable) => {
    return /^[0-9]$/.test(variable);
  };
  
  const letraSelecionada = async() => {
    
    let letraAtual = await AsyncStorage.getItem('letra');

    setLetra(letraAtual);
    console.log(letraAtual);

    if(isLetter(letraAtual)){
      setTexto("Esta é a letra: " + letraAtual);
    }
    else if(isNumber(letraAtual)){
      setTexto("Este é o número: " + letraAtual);
    }
    else{
      setTexto("Erro, tente recarregar a página");
    }

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores)

    return;
  };

  return (
    <View style={styles.container}>
      <Text>Letra selecionada: {letra}</Text>
      <Button onPress={speak} title="TESTAR ÁUDIO" />
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