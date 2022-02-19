import React, { useState,useEffect } from 'react';
import { View,StyleSheet,Text, ActivityIndicator,TextInput,TouchableOpacity, Keyboard } from 'react-native';
import api2 from '../../serveces/api2';
import Picker from './Picker/picker';

export default function Moeda() {
  const [moedas,setMoedas] = useState([]);//sao as moedas que estao sendo puxadas da api
  const [loading,setLoading] = useState(true);//o loading de carregamento
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);//o selecionamento das moedas
  const [moedaBValor,setMoedaBValor] = useState(0);//o valor das moedas selecionadas
  const [valorMoeda,setValorMoeda] = useState(null);//valor da moeda
  const [valorConvertido,setValorConvertido] = useState(0);//o valor convertido para real

  useEffect(() => {
    async function lodingMoedas(){
      const response = await api2.get('all/');//assim colocamos na nossa cont a api(que é nossa url base) o get que é a informacao e a chave da api
      //console.log(response.data)
      let arrayMoedas = []
      Object.keys(response.data).map((key)=>{
        arrayMoedas.push({
          Key: key,
          label: key,
          value: key
        })
      })//dessa forma percorreos o array e passamos os valores a ele 
      setMoedas(arrayMoedas);//passamos para moeda as chaves obitadas na array
      setLoading(false)//aqui logo apos passarmos toda nossa informacao da api fechamos o ciclo de carregamento
  }

  lodingMoedas();
  },[])

  async function converter(){
    if(moedaSelecionada === null || moedaBValor === 0){//caso a moeda selecionada ou o valor da moeda for 0 retornamos um array
      alert('por favor selecione uma moeda');
      return;
    }
    //USD-BRL ele devolve quanto é 1 dolar convertido pra reais
    const response = await api2.get(`all/${moedaSelecionada}-BRL`);//nessa response pegamos a moeda selecionada
    //console.log(response.data[moedaSelecionada].ask);

    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor));//passamos o resultado puxando as infomacoes da moeda selecionada ask(valor convertido (direto da api)) vezes o valor da moeda
    setValorConvertido(`R$ ${resultado.toFixed(2)}`);//passamos o valor convertido e apenas duas casas depois da virgula
    setValorMoeda(moedaBValor);

    Keyboard.dismiss();//aqui ele fecha o teclado
  }


  if(loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color='black' size='large'/>
      </View>
    )
  }else{
    return (
      <View style={styles.corpo}>
         <View style={styles.header}>
             <Text style={[styles.titulo,{color:'white'}]}>Conversor De Moedas</Text>
         </View>
        <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.container}>
                <Text style={[styles.titulo,{fontSize:16}]}>Selecione a Moeda que deseja</Text>
                <Picker moedas={moedas} onChange={ (moeda) => setMoedaSelecionada(moeda)}/>
              </View>
            </View>

            <View style={[styles.box,{marginTop:15}]}>
                <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
                <TextInput
                  placeholder='Ex: 150'
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={ (valor) => setMoedaBValor(valor)}
                />
            </View>
            <TouchableOpacity style={styles.botaoArea} onPress={converter}>
              <Text style={styles.botaoTexto}>Converter</Text>
            </TouchableOpacity>
          </View>

          {valorConvertido !== 0 && (//essa parte so aparecera quando o valor for diferente de 0
             <View style={styles.container}>
               <View style={styles.box}>
                <View style={styles.container}>
                  <Text style={[styles.titulo,{fontSize:30}]}>{valorMoeda} {moedaSelecionada}</Text>
                  <Text style={styles.titulo}>Corresponde a</Text>
                  <Text style={[styles.titulo,{fontSize:30}]}>{valorConvertido}</Text>
                </View>
               </View>
             </View>
          )}

      </View>
     );
  }
}

const styles = StyleSheet.create({
  corpo:{
    flex:1,
    backgroundColor:'black'
  },
  header:{
    width:'100%',
    height:80,
    backgroundColor:'#BB2020',
    alignItems:'center',
    justifyContent:'center'
  },
  titulo:{
      color:'#2b2d42',
      fontSize:19,
      fontWeight:'bold',
      marginTop:30
  },
  box:{
    width:'90%',
    backgroundColor:'#edf2f4',
    padding:15,
    borderRadius:9
  },
  container:{
    alignItems:'center',
    justifyContent:'center',
    padding:15
  },
  input:{
    width:'90%',
    padding:10,
    height:45,
    fontSize:20,
    marginTop:8,
    color:'black',
    borderWidth:1,
    marginLeft:15,
  },
  botaoArea:{
    width:'90%',
    backgroundColor:'#2b2d42',
    height:45,
    borderBottomLeftRadius:9,
    borderBottomRightRadius:9,
    alignItems:'center',
    justifyContent:'center'
  },
  botaoTexto:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  },
})
