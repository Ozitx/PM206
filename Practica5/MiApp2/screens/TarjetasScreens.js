/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
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
    justifyContent: 'center',
    flexDirection:'column'
  },

  tarjetaRoja:{ backgroundColor:'#FF6B6B'},
  tarjetaVerde:{ backgroundColor:'#6BCB77'},
});
