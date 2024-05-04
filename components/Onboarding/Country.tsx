import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface CountryProps {
  onSelect: (country: any) => void;
  country: any;
}

const Country: React.FC<CountryProps> = ({ onSelect, country }) => {
  console.log('country :", country);
  const [searchTerm, setSearchTerm] = useState('');
  const screenHeight = Math.round(Dimensions.get('window').height);

  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setInitialCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    if (text) {
      const filteredCountries = initialCountries.filter((country: any) => {
        return country.name.common
          .toLowerCase()
          .includes(text.toLowerCase());
      });
      setCountries(filteredCountries);
    } else {
      setCountries(initialCountries);
    }
  };

  const renderCountry = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={[
          styles.countryContainer,
          { height: screenHeight * 0.1 },
        ]}
        onPress={() => onSelect(item)}
      >
        <Image
          style={styles.countryImage}
          source={{ uri: item.flags.png }}
          resizeMode="cover"
        />
        <View style={styles.countryInfo}>
          <Text style={styles.countryName}>{item.name.common}</Text>
          <Text style={styles.countryPopulation}>
            Population: {item.population.toLocaleString()}
          </Text>
          <Text style={styles.countryRegion}>Region: {item.region}</Text>
          <Text style={styles.countryCapital}>Capital: {item.capital}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="magnifier" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a country..."
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={(item: any) => item.name.common}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  countryImage: {
    width: 100,
    height: 100,
  },
  countryInfo: {
    flex: 1,
    marginLeft: 16,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryPopulation: {
    fontSize: 16,
    marginTop: 4,
  },
  countryRegion: {
    fontSize: 16,
    marginTop: 4,
  },
  countryCapital: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default Country;