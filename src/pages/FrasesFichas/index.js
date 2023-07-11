import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function App() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  let i = 0;
  
  const selecionaLetra = async(x) => {

    console.log(i);

    if(i < 37){
        console.log(x);
        
        await AsyncStorage.setItem('frase', x);
    
        let keys;
        keys = await AsyncStorage.getAllKeys();
        const valores = await AsyncStorage.multiGet(keys);
        console.log(valores);
    
        return navigation.navigate("FrasesExemplos");

    }
    else{
        setModalVisible(true);
    }
  };

  
    const avaliar = async() => {

        await AsyncStorage.setItem('nivel', "2");

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
            onPress = {() => (i = i + 1) & selecionaLetra("a")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_a.png')} style={{width: 56,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: B */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("b")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_b.png')} style={{width: 56,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: C */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("c")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("d")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_d.png')} style={styles.imagem}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: E */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("e")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_e.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: F */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("f")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("g")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_g.png')} style={{width: 61,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: H */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("h")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_h.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: I */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("i")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("j")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_j.png')} style={styles.imagem}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: K */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("k")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_k.png')} style={styles.imagem}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: L */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("l")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("m")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_m.png')} style={{width: 85,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: N */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("n")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_n.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: O */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("o")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("p")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_p.png')} style={{width: 68,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: Q */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("q")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_q.png')} style={{width: 75,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: R */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("r")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("s")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_s.png')} style={{width: 73,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: T */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("t")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_t.png')} style={{width: 73,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: U */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("u")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("v")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_v.png')} style={{width: 70,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: W */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("w")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_w.png')} style={{width: 90,height: 50,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: X */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("x")}
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
            onPress = {() => (i = i + 1) & selecionaLetra("y")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_y.png')} style={{width: 68,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: Z */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("z")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/letra_z.png')} style={{width: 72,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: 0 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("0")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_0.png')} style={{width: 63,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 9
            Letras: 1, 2 e 3 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: 1 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("1")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_1.png')} style={{width: 67,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: 2 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("2")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_2.png')} style={{width: 63,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: 3 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("3")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_3.png')} style={{width: 61,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 10
            Letras: 4,5,6 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
      }}>

        {/* Letra: 4 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("4")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_4.png')} style={{width: 65,height: 50,alignContent: 'center',justifyContent: 'center'}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: 5 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("5")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_5.png')} style={{width: 63,height: 43,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: 6 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("6")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_6.png')} style={{width: 60,height: 45,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>

      </View>



      {/*   Linha 11
            Letras: 7,8,9 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '98%',
        marginTop: '5%',
        marginBottom: '5%'
      }}>

        {/* Letra: 7 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("7")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_7.png')} style={{width: 65,height: 45,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
        </View>

        {/* Letra: 8 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("8")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_8.png')} style={{width: 60,height: 45,alignContent: 'center',justifyContent: 'center',}}/>

          </TouchableOpacity> 
          
        </View>
      
        {/* Letra: 9 */}
        <View>
          <TouchableOpacity 
            onPress = {() => (i = i + 1) & selecionaLetra("9")}
            style = {styles.card}
            >
            
            <Image source={require('../../../assets/numero_9.png')} style={{width: 60,height: 45,alignContent: 'center',justifyContent: 'center'}}/>

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

            <Text style={styles.tituloModal}>NÍVEL 2 CONCLUÍDO</Text>

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
