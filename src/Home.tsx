import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards'
import { StackNavigationProp } from '@react-navigation/stack';

interface HomeProps {
  navigation: StackNavigationProp<any>;
}

interface City {
  name: string;
  image: any;
}

const Home: React.FC<HomeProps> = (props) => {
  const [selectedCity, setSelectedCity] = useState(''); // Renamed the state variable
  const cities: City[] = [
    {
      name: 'New Delhi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/image7.jpg'),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../assets/images/image2.jpg')} style={styles.backgroundImg} />
      <View style={{ position: 'absolute', padding: 12, flex: 1 }}>
        <View style={styles.topBar}>
          <Icon name='menu' color='white' size={46} style={styles.menu} />
          <Image source={require('../assets/images/user.jpg')} style={styles.userIcon} />
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <Text style={styles.welcome}>Welcome user</Text>
            <Text style={styles.searchText}>Search the city by the name</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              value={selectedCity} // Updated to use the renamed state variable
              onChangeText={(val) => setSelectedCity(val)}
              placeholder='Search city'
              placeholderTextColor='white'
              style={styles.textInput} // Added style for TextInput
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('DETAILS', { name: selectedCity })}>
              <Icon name='search' size={30} color='white' style={{ paddingHorizontal: 10 }} />
            </TouchableOpacity>
          </View>

          <Text style={{ color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 20, marginBottom: 20 }}>
            My Locations
          </Text>

          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
            keyExtractor={(item) => item.name} // Add keyExtractor to improve performance
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  backgroundImg: {
    height: deviceHeight,
    width: deviceWidth,
    opacity: 0.6,
    backgroundColor: 'black',
    position: 'absolute',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  userIcon: {
    height: 46,
    width: 46,
    borderRadius: 100,
  },
  menu: {},
  welcome: {
    marginTop: 100,
    fontSize: 30,
    color: 'white',
  },
  searchText: {
    fontSize: 20,
    color: 'white',
  },
  searchContainer: {
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 16,
  },
  textInput: {
    color: 'white',
    flex: 1,
    padding: 10, // Added padding for better input visibility
  },
});


