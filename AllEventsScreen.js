import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import EventCard from '../components/EventCard';

const events = [
  {
    title: 'Halloween Nuclear',
    date: '31 de Out',
    time: '22:00',
    location: 'Clube Nuclear, Avenida Principal, 123',
    city: 'São Paulo',
    ticketPrice: 'R$ 50,00',
    minimumAge: '18 anos',
    description: 'A ascensão das bruxas',
    image: require('../assets/evento2.png'),
    details: 'Venha participar de uma noite inesquecível com atrações especiais e músicas ao vivo. Prepare-se para uma experiência mágica e assustadora.',
  },
  {
    title: 'Funk #TBT',
    date: '01 de Nov',
    time: '23:00',
    location: 'Casa de Shows XYZ, Rua Central, 456',
    city: 'Rio de Janeiro',
    ticketPrice: 'R$ 30,00',
    minimumAge: '18 anos',
    description: 'Reviva o Passado',
    image: require('../assets/evento4.png'),
    details: 'Reviva os melhores hits do funk com uma festa temática especial de #TBT. Não perca essa chance de dançar até o amanhecer.',
  },
  {
    title: 'Halloween da Odonto',
    date: '03 de Nov',
    time: '21:30',
    location: 'Espaço Universitário, Avenida da Universidade, 789',
    city: 'Curitiba',
    ticketPrice: 'R$ 40,00',
    minimumAge: '18 anos',
    description: 'Uma festa assombrada',
    image: require('../assets/evento3.png'),
    details: 'A festa oficial da Odonto promete muita diversão com DJ ao vivo e surpresas temáticas.',
  },
  {
    title: 'Analloween',
    date: '05 de Nov',
    time: '20:00',
    location: 'Arena Trap, Rua da Música, 101',
    city: 'Belo Horizonte',
    ticketPrice: 'R$ 60,00',
    minimumAge: '16 anos',
    description: 'Uma festa assombrada',
    image: require('../assets/evento1.png'),
    details: 'Analloween traz os maiores artistas do cenário para uma noite repleta de ritmos e energia. Garanta já seu ingresso!',
  },
];

export default function AllEventsScreen({ navigation }) {
  const [selectedCity, setSelectedCity] = useState('');
  const filteredEvents = selectedCity ? events.filter(event => event.city === selectedCity) : events;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCity}
              onValueChange={(city) => setSelectedCity(city)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              dropdownIconColor="#FFFF00"
            >
              <Picker.Item label="Selecione uma cidade" value="" />
              <Picker.Item label="São Paulo" value="São Paulo" />
              <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
              <Picker.Item label="Curitiba" value="Curitiba" />
              <Picker.Item label="Belo Horizonte" value="Belo Horizonte" />
            </Picker>
          </View>
        }
        data={filteredEvents}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event: item })}>
            <EventCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `all-events-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 10,
  },
  pickerContainer: {
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#222',
    color: '#FFFF00',
    fontSize: 14,
  },
  pickerItem: {
    color: '#FFFF00',
  },
});
