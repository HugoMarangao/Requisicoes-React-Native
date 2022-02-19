import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker(props) {

    const placeholder = {
        label: 'Selecione uma moeda',
        value: null,
        color: '#2b2d42'
    }

 return (
   <RNPickerSelect
        placeholder={placeholder}
        items={props.moedas}
        onValueChange={(valor) => props.onChange(valor)}
        style={{
            inputIOS:{
                fontSize:27,
                color:'#2b2d42',
                paddingTop:40,
                textAlign:'center'
            },
            inputAndroid:{
                fontSize:27,
                color:'#2b2d42',
                textAlign:'center'
            }
        }}
   />
  );
}