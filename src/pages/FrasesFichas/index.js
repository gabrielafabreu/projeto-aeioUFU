import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function App() {
  const navigation = useNavigation();

  let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  const verificado = async() => {
    let todasVisualizadas = true;

    for (let letra of letras) {

      let progresso = await AsyncStorage.getItem(`progresso_frase_${letra}`);

      console.log("progresso: ", progresso);
      
      if (!progresso) {
        todasVisualizadas = false;
        break;
      }
    }
        
    if (todasVisualizadas) {
      console.log("CHEGOU AQUI");
      setModalVisible(true);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  
  const selecionaLetra = async(x) => {
    console.log(x);

    if(verificado()){  
    
      await AsyncStorage.setItem('letra', x);
      await AsyncStorage.setItem(`progresso_frase_${x}`, 'acessado');

      let keys;
      keys = await AsyncStorage.getAllKeys();
      const valores = await AsyncStorage.multiGet(keys);
      console.log(valores);

      return navigation.navigate("FrasesExemplos");
    }

    else{
      console.log(verificado());
    }

    let keys;
    keys = await AsyncStorage.getAllKeys();
    const valores = await AsyncStorage.multiGet(keys);
    console.log(valores);
    
  };

  
    const avaliar = async() => {

        await AsyncStorage.setItem('nivel', "4");

        let keys;
        keys = await AsyncStorage.getAllKeys();
        const valores = await AsyncStorage.multiGet(keys);
        console.log(valores);

        setModalVisible(false);

        return navigation.replace("AvaliacaoModulos");
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

        <Text style={styles.titulo}>Frases</Text>

        <TouchableOpacity 
          style = {styles.seta}
          onPress = {() => navigation.goBack()}
        >
          <Feather name="alert-circle" size={30} color="#cf1e2b" style={{marginTop: 5}}/>
        </TouchableOpacity>

      </View>

    <ScrollView>

      {/*   Linha 1
            Letras: A, B e C */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: A */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("a")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_a.png')} style={{width: 56,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: B */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("b")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_b.png')} style={{width: 56,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: C */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("c")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_c.png')} style={{width: 75,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>

      </View>

      
      {/*   Linha 2
            Letras: D, E e F */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: D */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("d")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_d.png')} style={styles.imagem}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: E */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("e")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_e.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: F */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("f")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_f.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>

      </View>


      {/*   Linha 3
            Letras: G, H e I */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: G */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("g")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_g.png')} style={{width: 61,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: H */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("h")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_h.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: I */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("i")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_i.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>

      </View>

      {/*   Linha 4
            Letras: J, K e L */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: J */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("j")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_j.png')} style={styles.imagem}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: K */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("k")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_k.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: L */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("l")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_l.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>

      </View>


      {/*   Linha 5
            Letras: M, N e O */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: M */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("m")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_m.png')} style={{width: 85,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: N */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("n")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_n.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: O */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("o")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_o.png')} style={{width: 80,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 5
            Letras: P, Q e R */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: P */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("p")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_p.png')} style={{width: 68,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: Q */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("q")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_q.png')} style={{width: 75,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: R */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("r")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_r.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>

      </View>

      {/*   Linha 6
            Letras: S, T e U */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: S */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("s")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_s.png')} style={{width: 73,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: T */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("t")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_t.png')} style={{width: 73,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: U */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("u")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_u.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 7
            Letras: V, W e X */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: V */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("v")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_v.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: W */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("w")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_w.png')} style={{width: 90,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: X */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("x")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_x.png')} style={{width: 60,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 8
            Letras: Y, Z e 0 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: Y */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("y")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_y.png')} style={{width: 68,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: Z */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("z")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_z.png')} style={{width: 72,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: 0 */}
        <View>
          <TouchableOpacity 
            onPress = {() => selecionaLetra("0")}
            style = {styles.card1}
            >
  
          </TouchableOpacity> 
          
        </View>

      </View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible);}}>
        <View style={styles.modalStyle}>

            <TouchableOpacity 
                style = {{alignSelf: 'flex-start',}}
                onPress = {() => setModalVisible(!modalVisible)}
            >
                <Feather name="x" size={24} color="#cf1e2b" />
            </TouchableOpacity>

            <Image 
              source={require('../../../assets/estrelas.png')}
              style={{height: 150,width:150, marginTop: -60,}}
            />

            <Text style={styles.tituloModal}>NÍVEL 4 CONCLUÍDO</Text>

            <TouchableOpacity 
                style = {styles.botaoModal}
            >
                <Text 
                    style={styles.confirmarModal}
                    onPress = {() => avaliar()}
                    // onPress = {() => setModalVisible(!modalVisible) & trocaNivel(nivelAtual)}
                >
                    FAZER AVALIAÇÃO  
                </Text>
            </TouchableOpacity>
        </View>
        
    </Modal>

    </ScrollView>
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
    marginBottom: '1%',
    fontWeight: "bold",
    fontSize:35,
  },

  card:{
    backgroundColor: 'white',
    borderRadius: 20,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card1:{
    backgroundColor: '#99CDEB',
    borderRadius: 20,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem:{
    width: 50,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },

  lista:{
    flexDirection: 'row',
  },

    modalStyle: {
        margin: 20,
        marginTop: 230,
        backgroundColor: "#abdbf7",
        borderRadius: 20,
        padding: 35,
        width: 300,
        alignItems: "center",
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    tituloModal:{
        color: '#cf1e2b',
        marginTop: 20,
        marginBottom: '10%',
        fontWeight: "bold",
        fontSize:24,
        alignSelf: 'center',
    },

    confirmarModal:{
        color: '#4878de',
        marginTop: '10%',
        fontWeight: "bold",
        fontSize: 24,
    },
});
