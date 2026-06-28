/* Zona 1: Importaciones */
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    Alert,
    Platform,
    ScrollView,
    Button,
    Keyboard,
} from 'react-native';
import { EventSubscriptionVendor } from "react-native/Libraries/vendor/emitter/EventEmitter";

/* Zona 2: Componente principal */
export default function RegistroScreen() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const[semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const procesarRegistro = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();

    if (!nombre || !carrera || !semestre) {
      alertasManager('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      alertasManager('Error', 'El semestre debe ser un número.');
      return;
    }

    alertasManager(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  const alertasManager = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

    return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.fila}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.fila}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.fila}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <Button
        title="Enviar Registro"
        onPress={procesarRegistro}
      />

    </ScrollView>
    );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});