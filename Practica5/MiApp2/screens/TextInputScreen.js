/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Platform, Alert, Keyboard } from 'react-native';
import React, { use, useState } from 'react';

/* Zona 2: Main - Hogar de los componentes */
export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');

  const procesarRegistro = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();
    if (!nombre || !password || !edad || !correo){
      alertasManager("Validacion", "Todos los campos son obligatorios")
      return;
    }
    alertasManager("Exito", 'Registro procesado para: ${nombre}');
  };

  const alertasManager = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert('${titulo}: ${mensaje}');
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  return (
    <View style = {styles.container}>
      {}
      <TextInput
      style = {styles.input}
      placeholder= "Nombre Completo"
      value= {nombre}
      onChangeText={setNombre}
      />

      {}
      <TextInput
      style = {styles.input}
      placeholder= "contraseña"
      value= {password}
      onChangeText={setPassword}
      secureTextEntry={true}
      />

      {}
      <TextInput
      style = {styles.input}
      placeholder= "Edad"
      value= {edad}
      onChangeText={setEdad}
      keyboardType= "numeric"
      maxLength={7}
      />

      {}
      <TextInput
      style = {styles.input}
      placeholder= "Correo"
      value= {correo}
      onChangeText={setCorreo}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      />

      {}
      <Button
      title= "Registrar usuario"
      onPress={procesarRegistro}
      />
    </View>
  )



}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: { 
    flex: 1, justifyContent:
    'center', padding: 20, 
    backgroundColor: '#f5f6fa' },
  input: { 
    borderWidth: 1, 
    borderColor: '#dcdde1',
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' }
});
