import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const EventDetails = ({ route }) => {
  const { event } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Data: </Text>{event.date}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Horário: </Text>{event.time}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Localização: </Text>{event.location}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Cidade: </Text>{event.city}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Valor do Ingresso: </Text>{event.ticketPrice}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.label}>Idade Mínima: </Text>{event.minimumAge}
      </Text>
      <Text style={styles.details}>{event.details}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#FFFF00',
  },
  details: {
    fontSize: 16,
    color: 'white',
    marginTop: 16,
    textAlign: 'left',
  },
});

export default EventDetails;
