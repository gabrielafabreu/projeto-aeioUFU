import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import letras_icon from "../../../assets/letras-icon.png"

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress = {() => navigation.navigate("LetrasFichas")}>
          
        <View style={styles.fundo}>
        
          <View>
            <Image source={letras_icon} style={styles.icon}/>
          </View>

          <View>
            <Text style={styles.texto}>Letras</Text>
          </View>

        </View>
      </TouchableOpacity>
{/* 
      <TouchableOpacity
        onPress = {() => navigation.replace("AvaliacaoModulos")}>
          <Text>Avaliação inicial</Text>
        </TouchableOpacity> */}

      <TouchableOpacity
        onPress = {() => navigation.replace("SilabasFichas")}>
        <Text>Silabas fichas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = {() => navigation.replace("PalavrasFichas")}>
        <Text>Palavras fichas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = {() => navigation.replace("FrasesFichas")}>
        <Text>Frases fichas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = {() => navigation.replace("HistoriasFichas")}>
        <Text>Histórias fichas</Text>
      </TouchableOpacity>
      
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

  icon:{
    height: 150,
    width: 100,
    marginTop: -30,
  },

  texto:{
    backgroundColor: '#f6bc2d',
    fontSize: 40,
    color: 'white',
    alignItems: 'center',
  },

  teste:{
    backgroundColor: '#f6bc2d',
    fontSize: 40,
    color: 'white',
    marginLeft: -25,
    marginTop: 20,
    paddingLeft: 35,
    marginBottom: 50,
    paddingRight: 150,
    borderRadius: 35,
  },

  fundo:{
    flexDirection: 'row',
    backgroundColor: '#f6bc2d',
    borderRadius: 35,
    height: 60,
    width: 350,
    // width: 170,
  }
});
