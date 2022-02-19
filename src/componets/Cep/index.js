import React, { useEffect,useState,useRef } from 'react';
import { View,Text,TextInput,StyleSheet, TouchableOpacity,Keyboard } from 'react-native';
import api3 from '../../serveces/api3';


export default function Cep() {

  const [cep,setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser,setCepUser] = useState(null);

  async function buscar(){
    if(cep === ''){
      alert('digite um cep valido');
      setCep('');
      return;//caso nao houvesse ele continuaria mostrando o codigo
    }

    try{//para nao ficar mostrando erro pro usuarios usamos o try e o catch
      const response = await api3.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data);

      Keyboard.dismiss();//garantir que o teclado fechara
    }catch(error){
      console.log('ERROR: ' + error);
    }
  }

  function limpar(){
    setCep('');
    inputRef.current.focus();//com o useRef usamos o gatilho do ref no input para quando limpar da o focus no input
    setCepUser(null)
  }



 return (
   <View style={styles.corpo}>
      <View style={styles.header}>
         <Text style={styles.titulo}>Descobridor de CEP</Text>
      </View>
      <View style={styles.container}>
          <TextInput
            placeholder="ex: 37022560"
            value={cep}
            onChangeText={ (texto) => setCep(texto)}
            style={styles.input}
            keyboardType="numeric"
            ref={inputRef}
          />
         <View style={styles.containerButom}>

          <TouchableOpacity style={styles.b1} onPress={buscar}>
            <Text style={styles.textbutom}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.b2} onPress={limpar}>
            <Text style={styles.textbutom}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {cepUser &&
            <View style={styles.containerResult}>
                <Text style={styles.info}>Cep: {cepUser.cep}</Text>
                <Text style={styles.info}>Logradouro: {cepUser.logradouro}</Text>
                <Text style={styles.info}>Bairro: {cepUser.bairro}</Text>
                <Text style={styles.info}>Cidade: {cepUser.localidade}</Text>
                <Text style={styles.info}>Estado: {cepUser.uf}</Text>
            </View>
          }
      </View>
   </View>
  );
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
    color:'white',
    fontSize:19,
    fontWeight:'bold',
    marginTop:30
},
container:{
  alignItems:'center',
  justifyContent:'center'
},
input:{
  width:'90%',
  borderWidth:1,
  borderColor:'white',
  padding:10,
  backgroundColor:'white',
  borderRadius:4,
  marginTop:30
},
containerButom:{
  flexDirection:'row',
  padding:15,
  alignItems:'center',
  justifyContent:'center'
  
},
b2:{
 backgroundColor:'#FF3812',
 padding:15,
 marginLeft:90,
 borderRadius:5
},
b1:{
  backgroundColor:'#51B0F9',
  padding:15,
  borderRadius:5
 },
 textbutom:{
   fontWeight:'bold',
   fontSize:16,
   color:'#fff'
 },
 containerResult:{
   width:'80%',
   height:260,
   backgroundColor:'#2b2d42',
   padding:19,
   elevation:2,
   borderRadius:10,
   marginTop:60
 },
 info:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    padding:8
 }
})
