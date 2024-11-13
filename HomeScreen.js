import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
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

export default function HomeScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEntertainmentIndex, setCurrentEntertainmentIndex] = useState(0);
  const flatListRef = useRef(null);
  const entertainmentFlatListRef = useRef(null);

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const CARD_WIDTH = SCREEN_WIDTH * 0.8;
  const SIDE_MARGIN = (SCREEN_WIDTH - CARD_WIDTH) / 2;

  // Auto-scroll dos cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [events.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntertainmentIndex((prevIndex) => (prevIndex + 1) % entertainments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [entertainments.length]);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [currentIndex]);

  useEffect(() => {
    entertainmentFlatListRef.current?.scrollToIndex({
      index: currentEntertainmentIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [currentEntertainmentIndex]);

  const onScrollEnd = (event, isEntertainment = false) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / CARD_WIDTH);

    if (isEntertainment) {
      setCurrentEntertainmentIndex(newIndex);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      
      <Text style={styles.sectionHeader}>Eventos</Text>
      <FlatList
        ref={flatListRef}
        data={events.slice(0, 4)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SIDE_MARGIN }}
        snapToAlignment="center"
        snapToInterval={CARD_WIDTH + 10}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.cardContainer, { width: CARD_WIDTH }]}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
          >
            <EventCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `event-${index}`}
        onMomentumScrollEnd={(e) => onScrollEnd(e)}
      />
      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate('AllEvents')}
      >
        <Text style={styles.sectionButtonText}>Todos os Eventos</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Entretenimentos</Text>
      <FlatList
        ref={entertainmentFlatListRef}
        data={entertainments.slice(0, 4)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SIDE_MARGIN }}
        snapToAlignment="center"
        snapToInterval={CARD_WIDTH + 10}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.cardContainer, { width: CARD_WIDTH }]}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
          >
            <EventCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `entertainment-${index}`}
        onMomentumScrollEnd={(e) => onScrollEnd(e, true)}
      />
      <TouchableOpacity
        style={styles.sectionButton}
        onPress={() => navigation.navigate('AllEntertainment')}
      >
        <Text style={styles.sectionButtonText}>Todos os Entretenimentos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222' },
  logoContainer: { alignItems: 'center', marginBottom: 1 },
  logo: { width: '100%', height: 60, resizeMode: 'contain' },
  sectionHeader: { fontSize: 18, color: '#FFFF00', fontWeight: 'bold', marginTop: 10, textAlign: 'center', marginBottom: 5 },
  cardContainer: { marginHorizontal: 5 },
  sectionButton: {
    backgroundColor: '#FFFF00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  sectionButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
