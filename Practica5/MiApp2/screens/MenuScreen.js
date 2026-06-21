/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreens';
import SafeAreaScreen  from './SafeAreaScreen';
import PressableScreen  from './PressableScreen';
import ModalScreen from './ModalScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';


/* Zona 2: Main - Hogar de los componentes */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />
        case 'safeArea':
            return <SafeAreaScreen />
        case 'pressable':
            return <PressableScreen />
        case 'modal':
            return <ModalScreen />
        case 'textinput':
            return <TextInputScreen />
        case 'flatlist':
            return <FlatListScreen />
        case 'image':
            return <ImageBackgroundScreen />
        case 'activity':
            return <ActivityIndicatorScreen />
        case 'menu':
            default: 
             return (
                <View style={styles.container}>
                    <View style={styles.card}>

                        <Text style={styles.title}> Menu de Practicas </Text>
                        <Text style={styles.subtitle}> React Native Components </Text>

                            <Button onPress={()=>setScreen('tarjetas')} title='Tarjetas' />
                            <Button onPress={()=>setScreen('safeArea')} title='SafeAreaView' />
                            <Button onPress={()=>setScreen('pressable')} title='Pressable' />
                            <Button onPress={()=>setScreen('textinput')} title='TextInput' />
                            <Button onPress={()=>setScreen('flatlist')} title='FlatList' />
                            <Button onPress={()=>setScreen('image')} title='ImageBack.' />
                            <Button onPress={()=>setScreen('activity')} title='ActivityInd.' />
                            <Button onPress={()=>setScreen('modal')} title='Modal' />     

                            <StatusBar style="auto" /> 
                    </View>
                </View>
            );
    }
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 24,
    padding: 30,
    width: '80%',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#b1b1b1',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
  },
});
