import {  Image, StyleSheet, Text, View, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState , useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import carregamento from '../../../assets/carregamento.png';
// import logo from '../../../assets/logo.png';

export default function App() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [modal2, setModal2] = useState(false);
  
    const [nivel, setNivel] = useState();
    const [pergunta, setPergunta] = useState();
    const [nivelAtual, setnivelAtual] = useState(1);
    const [parte, setParte] = useState(1);
    
    const [questao,setQuestao] = useState(null);

    const [opcao1,setOpcao1] = useState({
        imagem: null,
        letra: null,
    });
    const [opcao2,setOpcao2] = useState({
        imagem: null,
        letra: null,
    });
    const [opcao3,setOpcao3] = useState({
        imagem: null,
        letra: null,
    });

    const [correta,setCorreta] = useState();

    useEffect(() => {

        definirNivel();

    },[]);

    const definirNivel = async() => {
        let nivelAtual = await AsyncStorage.getItem('nivel');

        console.log("nivel atual: ", nivelAtual);

        setNivel(nivelAtual);

        console.log(nivel);

        preencheDados(nivelAtual, parte);

    };

    const opcaoEscolhida = (respostaEscolhida) => {

        console.log("RESPOSTA ESCOLHIDA: ", respostaEscolhida);
        
        console.log("RESPOSTA CORRETA: ", correta);

        console.log("PARTE: ", parte)

        if(nivel == "1"){

            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setParte(2);
                    
                    preencheDados(nivel,2);

                }
                else if(parte == 2){

                    setParte(3);
                    
                    preencheDados(nivel,3);

                }
                else if(parte == 3){

                    setParte(4);
                    
                    preencheDados(nivel,4);

                }

                else if(parte == 4){

                    setParte(5);
                    
                    preencheDados(nivel,5);

                }
                else{
                    // navigation.navigate("LetrasFichas");

                    setModal2(true);
                }
            }

            else{
                console.log("incorreto");
                Alert.alert("Resposta incorreta, tente novamente!");
            }    

        }

        else if(nivel == "2"){

            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setParte(2);
                    
                    preencheDados(nivel,2);

                }
                
                else{
                    // navigation.navigate("LetrasFichas");

                    setModal2(true);
                }
            }

            else{
                console.log("incorreto");
                Alert.alert("Resposta incorreta, tente novamente!");
            }    

        }
        else{
            console.log("incorreto");
            Alert.alert("Resposta incorreta, tente novamente!");
        }

    };

    const preencheDados = (nivel,parte) => {

        console.log("nivel", nivel)
        console.log("parte", parte)

        if(nivel == 1){

            setPergunta("Selecione a letra correspondente ao desenho abaixo:");

            if(parte == 1){
                setQuestao(require('../../../assets/pergunta_MORANGO.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_A.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_T.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_M.png'),
                    letra: "m"
                });

                setCorreta("m");
            }

            else if(parte == 2){
                setQuestao(require('../../../assets/pergunta_5.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_9.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_5.png'),
                    letra: "5",
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_2.png'),
                    letra: null
                });

                setCorreta("5");
            }

            else if(parte == 3){
                setQuestao(require('../../../assets/pergunta_JACARE.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_J.png'),
                    letra: "j"
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_C1.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_Z.png'),
                    letra: null
                });

                setCorreta("j");
            }

            else if(parte == 4){
                setQuestao(require('../../../assets/pergunta_7.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_1.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_4.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_7.png'),
                    letra: "7"
                });

                setCorreta("7");
            }

            else if(parte == 5){
                setQuestao(require('../../../assets/pergunta_VELA.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_V.png'),
                    letra: "v"
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_L1.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_Y.png'),
                    letra: null
                });

                setCorreta("v");
            }
        }

        else if(nivel == 2){

            setPergunta("Selecione a letra correspondente ao desenho abaixo:");

            if(parte == 1){
                setQuestao(require('../../../assets/pergunta_ba.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_TA.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_SA.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_BA.png'),
                    letra: "ba"
                });

                setCorreta("ba");
            }

            else if(parte == 2){

                setParte(3)

                setQuestao(require('../../../assets/pergunta_5.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_9.png'),
                    letra: null,
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_5.png'),
                    letra: "5",
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_2.png'),
                    letra: null,
                });

                setCorreta("5");
            }
        }
        
        return null;
    };

    const trocaNivel = (nivel) => {

        console.log("teste");

        console.log(nivel);

        setNivel(2);

        preencheDados(2,1);

    };

    const rota = () => {
        setModal2(!modal2);

        if(nivel == 1){
            navigation.navigate("SilabasFichas");
        }

        else if(nivel == 2){
            navigation.navigate("FrasesFichas");
        }

        else{
            navigation.navigate("HistoriasFichas");
        }
    }

    return (

        <View style={styles.container}>

            <View style={{flexDirection: 'row',width:'100%'}}>
                <TouchableOpacity 
                    style = {{alignSelf: 'center',marginLeft: '3%'}}
                    onPress = {() => navigation.goBack()}
                >
                    <Feather name="chevron-left" size={38} color="#cf1e2b" />
                </TouchableOpacity>


            </View>

            <View style={{
                                flexDirection: 'column', 
                                alignItems: 'center',
                                paddingRight: 70,
                                paddingLeft: 95,
                            }}>
                    <Text style={styles.titulo}>Avaliação do</Text>
                    <Text style={styles.titulo}>módulo {nivel}</Text>
                </View>

            <View>
                {(() => {
                    if (nivel == '1' || nivel == '2' || nivel == '3' || nivel == '4' || nivel =='5'){
                        return (
                            <View>

                                {/* Apresentação */}
                                <Text style={styles.pergunta}>{pergunta}</Text>

                                {/* Exemplo - pergunta */}
                                <Image 
                                    source={questao}
                                    style={styles.imagem}
                                />

                                {/* Respostas */}
                                <View style={{
                                                flex: 1,
                                                flexDirection:'row',
                                                }}>

                                    {/* Opção 1 */}

                                    <TouchableOpacity
                                        onPress = {() => opcaoEscolhida(opcao1.letra)}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            height: 100,
                                            borderRadius: 20,
                                            marginRight: 20,
                                            paddingTop: '7.5%',
                                        }}
                                    >
                                        <Image
                                                source={opcao1.imagem}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />

                                    </TouchableOpacity>
                                    
                                    {/* Opção 2 */}

                                    <TouchableOpacity
                                        onPress = {() => opcaoEscolhida(opcao2.letra)}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            height: 100,
                                            borderRadius: 20,
                                            marginRight: 20,
                                            paddingTop: '7.5%',
                                        }}
                                    >
                                        <Image
                                                source={opcao2.imagem}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />

                                    </TouchableOpacity>

                                    {/* Opção 3 */}

                                    <TouchableOpacity
                                        onPress = {() => opcaoEscolhida(opcao3.letra)}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            height: 100,
                                            borderRadius: 20,
                                            paddingTop: '7.5%',
                                        }}
                                    >
                                        <Image
                                                source={opcao3.imagem}
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />

                                    </TouchableOpacity>

                                </View>
                            </View>
                            
                            
                        )
                    }
                    else {
                        return (
                            <View>

                                {/* Apresentação */}
                                <Text style={styles.pergunta}>Carregando dados...</Text>

                            </View>
                        
                        
                    )
                    }
                })()}
            </View>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalStyle}>

                    <TouchableOpacity 
                        style = {styles.closeModal}
                        onPress = {() => setModalVisible(!modalVisible)}
                    >
                        <Feather name="x" size={24} color="#cf1e2b" />
                    </TouchableOpacity>

                    <Text style={styles.tituloModal}>LOGIN</Text>

                    <Text>Usuário: </Text>
                    <TextInput></TextInput>

                    <Text>Senha: </Text>
                    <TextInput></TextInput>

                    <Text>Nível: </Text>
                    <TextInput
                        value={nivelAtual}
                        onChangeText={(nivelAtual) => setnivelAtual(nivelAtual)}
                    />

                    <TouchableOpacity 
                        style = {styles.botaoModal}
                    >
                        <Text 
                            style={styles.confirmarModal}
                            onPress = {() => setModalVisible(!modalVisible) & trocaNivel(nivelAtual)}
                        >
                            ENTRAR    
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                onRequestClose={() => {
                    setModal2(!modal2);
                }}
            >
                <View style={styles.modalStyle}>

                    <TouchableOpacity 
                        style = {styles.closeModal}
                        onPress = {() => setModal2(!modal2)}
                    >
                        <Feather name="x" size={24} color="#cf1e2b" />
                    </TouchableOpacity>

                    <Text style={styles.tituloModal}>PARABÉNS, VOCÊ PASSOU DE NÍVEL!</Text>

                    <TouchableOpacity 
                        style = {{backgroundColor: "#99CDEB", borderRadius: 15,}}
                    >
                        <Text 
                            style={styles.confirmarModal}
                            onPress = {() => rota()}
                        >
                            CONTINUE PARA O PRÓXIMO NÍVEL 
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>
            {/* Próxima pergunta */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99CDEB',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '15%',
    },

    pergunta: {
        color: 'white',
        fontSize: 20,
        marginTop: 15,
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

    closeModal:{
        alignSelf: 'flex-start',
    },

    tituloModal:{
        color: '#cf1e2b',
        marginTop: 20,
        marginBottom: '10%',
        fontWeight: "bold",
        fontSize:25,
    },

    confirmarModal:{
        color: '#4878de',
        margin: 15,
        // marginTop: '10%',
        fontWeight: "bold",
        fontSize:22,
    },

    imagem:{
        width: 200,
        height: 250,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    card:{
        // flex: 0.1,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 25,
    },

    titulo:{
        color: '#cf1e2b',
        fontWeight: "bold",
        fontSize: 35,
      },


});
