import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
 
 function handlerSubmit(){
   const alt = altura / 100;
   const imc = peso / (alt * alt);
   
   if(imc <18.6){
     alert('Você esta abaixo do peso!' + imc.toFixed(2));
   }else if (imc >= 18.6 && imc < 24.9){
    alert('Você esta no peso ideal!' + imc.toFixed(2));
   }else if (imc >= 24.9 && imc < 34.9){
    alert('Você esta levemente acima do peso!' + imc.toFixed(2));
   }else if ( imc >= 34.9){
    alert('Você esta acima do peso!' + imc.toFixed(2));
   }
 }

  return(
    <View style={styles.container}>
      <Text style={styles.title} > Calcule seu IMC </Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={(peso)=> setPeso(peso)}
      placeholder= "Peso (kg)"
      keyboardType = "numeric"
      />
      
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={(altura)=> setAltura(altura)}
      placeholder= "Altura (cm)"
      keyboardType = "numeric"
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handlerSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E6E6FA'
  },
  title:{
    color: '#708090',
    textAlign :'center',
    marginTop: 25,
    fontSize:30
  },
  input:{
    backgroundColor: '#363636',
    borderRadius: 10,
    margin: 15,
    padding:10,
    color:'#FFF',
    fontSize: 20,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#191970',
    padding:10,
  },
  buttonText:{
    margin:15,
   color:'#FFF',
    fontSize:25,
  }
});