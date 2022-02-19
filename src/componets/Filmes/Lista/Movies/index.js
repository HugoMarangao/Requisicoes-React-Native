import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';

export default function Movies(props) {
 return (
   <View>
       <Text style={styles.titulo}>{props.filmes.nome}</Text>
       <Image
        source={{ uri: props.filmes.foto}}
        style={styles.capa}
        />
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
      marginLeft: 10,
      marginRight: 10,
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    modalContainer:{
      height: '80%',
      backgroundColor: '#121212',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    },
    btnVoltar:{
      backgroundColor: '#E52246',
      padding: 10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    },
    titulo:{
      textAlign: 'center',
      color: '#FFF',
      padding: 10,
      fontSize: 28,
      fontWeight: 'bold'
    },
    sinopse:{
      color: '#FFF',
      fontSize: 18,
      marginBottom: 8,
      marginLeft: 10
    },
    descricao:{
      color: '#FFF',
      marginLeft: 10,
      marginRight: 10,
    },
    capa:{
      height: 250,
      zIndex:2,
      marginBottom:15
    },
    
  });