import React, {useState} from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Movies from './Movies';

export default function Lista({data}) {

    const [visi,setVisi] = useState(false)

 return (
   <ScrollView>
       <View style={styles.container}>
            <View style={styles.box}>
                <Movies filmes={data}/>
                <TouchableOpacity onPress={()=>setVisi(true)}>
                    <View style={styles.botao}>
                        <Text style={styles.textobotao}>mais sobre</Text>
                    </View>
                </TouchableOpacity>
                <Modal visible={visi} animationType="slide">
                    <View style={styles.box1}>
                        <Image
                        source={{ uri: data.foto}}
                        style={styles.capa}
                        />
                        <View style={styles.header}>
                            <Text style={styles.titulo}>{data.nome}</Text>
                        </View>
                        <View style={{padding:8}}>
                            <Text style={styles.titulo}>Sinopse:</Text>
                            <Text style={styles.titulo}>{data.sinopse}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>setVisi(false)}>
                            <View style={[styles.botao,{width:'80%',backgroundColor:'#BB2020',marginTop:15,marginLeft:30}]}>
                                <Text style={styles.textobotao}>fechar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
       </View>
   </ScrollView>
  );
}
const styles = StyleSheet.create({
    box:{
        width:'90%',
        backgroundColor:'black',
        borderWidth:1,
        borderColor:'white'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:15
    },
    botao:{
        width:'100%',
        backgroundColor:'#003F63',
        padding:15,
        alignItems:'center',
        justifyContent:'center'
    },
    textobotao:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    capa:{
        height: 250,
        zIndex:2,
        marginBottom:15,
      },
      box1:{
        flex:1,
        backgroundColor:'black',
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    titulo:{
        color:'white',
        fontSize:19,
        fontWeight:'bold',
        marginTop:30
    }
})
