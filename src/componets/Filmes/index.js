import React, {useState,useEffect} from 'react';
import { View,StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import api from '../../serveces/api';
import Lista from './Lista';

export default function Filmes() {

    const [filmes,setFimes] = useState([]);
    const [carregando,setCarregando] = useState(true);

    useEffect(() => {
        
        async function loadingFilmes(){
            const response = await api.get('r-api/?api=filmes');

            setFimes(response.data);
            setCarregando(false);
        }

        loadingFilmes();

    },[])

    if(carregando){
       return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color='#BB2020' size='large'/>
        </View>
       );
    }else{
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>OS Melhores Filmes</Text>
                </View>
                <FlatList
                         showsVerticalScrollIndicator={false}
                         keyExtractor={(item)=> item.id}
                         data={filmes}
                         renderItem={ ({item}) => <Lista data={item}/>}
                    />
            </View>
           );
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
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
    }
})
