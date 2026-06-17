/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil
      estiloE={styles.tarjetaRoja}
      nombre = "Cynthia Reséndiz"
      carrera= "Sistemas"
      materia="Programación Móvil"
      cuatri="9" >
      </Perfil>

      <Perfil
      estiloE={styles.tarjetaVerde}
      nombre = "Megamente"
      carrera= "Evil"
      materia="Super villano"
      cuatri="10" >
      </Perfil>

      <Perfil
      estiloE={styles.tarjetaRoja}
      nombre = "Ozitx"
      carrera= "Sistemas"
      materia="Programación Móvil"
      cuatri="9" >
      </Perfil>      

      <StatusBar style="auto" /> 

    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },

  tarjetaRoja:{ backgroundColor:'#FF6B6B'},
  tarjetaVerde:{ backgroundColor:'#6BCB77'},
});
