import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import EventCard from '../components/EventCard';

const entertainments = [
  {
    title: 'Cinema ao Ar Livre',
    date: '04 de Nov',
    time: '19:00',
    location: 'Parque Central, Rua das Flores, 321',
    city: 'Porto Alegre',
    ticketPrice: 'Gratuito',
    minimumAge: 'Livre',
    description: 'Filme ao ar livre com pipoca grátis',
    image: require('../assets/entretenimento1.png'),
    details: 'Aproveite uma noite especial de cinema ao ar livre com amigos e familiares. Traga sua cadeira e aproveite!',
  },
  {
    title: 'Stand-up Comedy Night',
    date: '07 de Nov',
    time: '20:30',
    location: 'Teatro Central, Avenida Comédia, 567',
    city: 'Florianópolis',
    ticketPrice: 'R$ 25,00',
    minimumAge: '16 anos',
    description: 'Risadas garantidas',
    image: require('../assets/entretenimento2.png'),
    details: 'Os melhores comediantes da região em uma noite cheia de humor e diversão. Reserve já seu lugar!',
  },
  {
    title: 'Festival de Food Trucks',
    date: '10 de Nov',
    time: '12:00',
    location: 'Praça da Alimentação, Rua Gourmet, 789',
    city: 'Recife',
    ticketPrice: 'Entrada gratuita',
    minimumAge: 'Livre',
    description: 'Gastronomia de rua',
    image: require('../assets/entretenimento3.png'),
    details: 'Experimente uma variedade de comidas e bebidas dos melhores food trucks da cidade. Música ao vivo e ambiente familiar.',
  },
  {
    title: 'Show de Mágica',
    date: '12 de Nov',
    time: '18:00',
    location: 'Auditório Mágico, Rua Ilusões, 101',
    city: 'Salvador',
    ticketPrice: 'R$ 20,00',
    minimumAge: 'Livre',
    description: 'Espetáculo fascinante',
    image: require('../assets/entretenimento4.png'),
    details: 'Venha se surpreender com truques de mágica impressionantes e participar de um show interativo para todas as idades.',
  },
];

export default function AllEntertainmentScreen({ navigation }) {
  const [selectedCity, setSelectedCity] = useState('');
  const filteredEntertainments = selectedCity ? entertainments.filter(entertainment => entertainment.city === selectedCity) : entertainments;

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
              <Picker.Item label="Porto Alegre" value="Porto Alegre" />
              <Picker.Item label="Florianópolis" value="Florianópolis" />
              <Picker.Item label="Recife" value="Recife" />
              <Picker.Item label="Salvador" value="Salvador" />
            </Picker>
          </View>
        }
        data={filteredEntertainments}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event: item })}>
            <EventCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `all-entertainment-${index}`}
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
