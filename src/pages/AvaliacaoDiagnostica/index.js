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
    const [avaliacao,setAvaliacao] = useState(false);
  
    const [nivel, setNivel] = useState(1);
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

        AsyncStorage.clear();

        console.log("avaliacao: ", avaliacao);

    },[]);
    
    const opcaoEscolhida = (respostaEscolhida) => {

        console.log("RESPOSTA ESCOLHIDA: ", respostaEscolhida);
        
        console.log("RESPOSTA CORRETA: ", correta);

        console.log("PARTE: ", parte);

        console.log("NÍVEL: ", nivel);

        if(nivel == "1"){

            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setParte(2);
                    
                    preencheDados(nivel,2);

                }
                else{

                    setNivel(2);
                    setParte(1);

                    preencheDados(2,1);
                    // navigation.navigate("LetrasFichas");

                    // setModal2(true);
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

                    setNivel(3);
                    setParte(1);

                    preencheDados(3,1);
                    // navigation.navigate("LetrasFichas");

                    // setModal2(true);
                }
            }

            else{
                console.log("incorreto");
                Alert.alert("Resposta incorreta, tente novamente!");
            }    

        }
        else if(nivel == "3"){

            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setParte(2);
                    
                    preencheDados(nivel,2);

                }
                
                else{

                    setNivel(4);
                    setParte(1);

                    preencheDados(4,1);
                    // navigation.navigate("LetrasFichas");

                    // setModal2(true);
                }
            }

            else{
                console.log("incorreto");
                Alert.alert("Resposta incorreta, tente novamente!");
            }    
            
             

        }
        else if(nivel == "4"){
    
            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setParte(2);
                    
                    preencheDados(nivel,2);

                }
                
                else{

                    setNivel(5);
                    setParte(1);

                    preencheDados(5,1);
                    // navigation.navigate("LetrasFichas");

                    // setModal2(true);
                }
            }
            else{
                console.log("incorreto");
                Alert.alert("Resposta incorreta, tente novamente!");
            }
        } 
         

        else if(nivel == "5"){
    
            if(respostaEscolhida == correta & correta != null){
                
                console.log("correto");

                if(parte == 1){

                    setNivel(5);

                    setParte(1);
                    
                    preencheDados(5,1);
                }
                
                else{

                    preencheDados(1,1);
                    // navigation.navigate("LetrasFichas");

                    // setModal2(true);
                }
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

        setAvaliacao(true);

        if(nivel == 1){

            setPergunta("Selecione a letra correspondente ao desenho abaixo:");

            if(parte == 1){
                setQuestao(require('../../../assets/cachorro.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_L.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_C.png'),
                    letra: "c"
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_P.png'),
                    letra: null
                });

                setCorreta("c");
            }

            else if(parte == 2){
                setQuestao(require('../../../assets/ovo.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_O.png'),
                    letra: "o"
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_D.png'),
                    letra: null,
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_S.png'),
                    letra: null
                });

                setCorreta("o");
            }

        }

        else if(nivel == 2){

            setPergunta("Qual é a sílaba?");

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

                setQuestao(require('../../../assets/pergunta_MI.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_LI.png'),
                    letra: null,
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_SI.png'),
                    letra: null,
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_MI.png'),
                    letra: "mi",
                });

                setCorreta("mi");
            }
        }

        else if(nivel == 3){

            setPergunta("Qual é a palavra?");

            if(parte == 1){
                setQuestao(require('../../../assets/pergunta_GATO.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_GATO.png'),
                    letra: "gato"
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_RATO.png'),
                    letra: null
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_PATO.png'),
                    letra: null
                });

                setCorreta("gato");
            }

            else if(parte == 2){

                setParte(3)

                setQuestao(require('../../../assets/pergunta_UVA.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_CHUVA.png'),
                    letra: null,
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_LUVA.png'),
                    letra: null,
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_UVA.png'),
                    letra: "uva",
                });

                setCorreta("uva");
            }
        }
        

        else if(nivel == 4){

            setPergunta("Leia a frase abaixo e selecione a figura correspondente");

            if(parte == 1){
                setQuestao(require('../../../assets/pergunta_FRASE1.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_FRASE-PNEU.png'),
                    letra: null
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_FRASE-LARANJA.png'),
                    letra: "laranja"
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_FRASE-QUEIJO.png'),
                    letra: null
                });

                setCorreta("laranja");
            }

            else if(parte == 2){

                setParte(3)

                setQuestao(require('../../../assets/pergunta_FRASE2.png'));

                setOpcao1({ 
                    imagem: require('../../../assets/resposta_FRASE_IGREJA.png'),
                    letra: "igreja",
                });
                
                setOpcao2({ 
                    imagem: require('../../../assets/resposta_FRASE_BOLA.png'),
                    letra: null,
                });

                setOpcao3({ 
                    imagem: require('../../../assets/resposta_FRASE_ZIPER.png'),
                    letra: null,
                });

                setCorreta("igreja");
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
                <Text style={styles.titulo}>Avaliação</Text>
                <Text style={styles.titulo}>diagnóstica</Text>
            </View>

            <View>
                {(() => {
                    if (!avaliacao){
                        return (
                            
                            <View>
                                <View>

                                    {/* Apresentação */}
                                    <Text style={{
                                        color: 'white',
                                        alignSelf: 'center',
                                        fontSize: 30,
                                        marginTop: 50,
                                        textAlign: 'center',
                                        marginHorizontal: 20,
                                    }}>
                                        Para oferecer uma experiência individualizada e personalizada, 
                                        propomos que faça uma avaliação diagnóstica de nível.
                                    </Text>

                                </View>

                                <TouchableOpacity
                                    style = {styles.botaoContinuar}
                                    onPress= {() => preencheDados(1,1)}
                                >

                                    <Text style={styles.botaoTexto}>
                                        Iniciar avaliação
                                    </Text>
                                    
                                </TouchableOpacity>

                            </View>
                            
                        )
                    }
                    else {
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
                                            paddingTop: '7%',
                                        }}
                                    >
                                        <Image
                                                source={opcao1.imagem}
                                                style={{
                                                    width: 60,
                                                    height: 60,
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
                                            paddingTop: '7%',
                                        }}
                                    >
                                        <Image
                                                source={opcao2.imagem}
                                                style={{
                                                    width: 60,
                                                    height: 60,
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
                                            paddingTop: '7%',
                                        }}
                                    >
                                        <Image
                                                source={opcao3.imagem}
                                                style={{
                                                    width: 60,
                                                    height: 60,
                                                }}
                                            />

                                    </TouchableOpacity>

                                </View>
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
        alignSelf: 'center'
    },

    botaoContinuar:{
        margin: 20,
        marginTop: 150,
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
        width: 300,
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

    botaoTexto:{
        color: '#cf1e2b',
        fontWeight: "bold",
        fontSize: 35,
        textAlign: 'center'
    },

});
