import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import mockupData from './MockupData.js';

const CarouselList = () => {
  const data = mockupData();

  return (
    <View style={{backgroundColor: '#09182b'}}>
      <Text style={styles.topTextStyle}> Öne Çıkanlar {'>'} </Text>
      <FlatList
        style={{width: '100%', height: '100%', marginTop: 20}}
        data={data}
        horizontal
        renderItem={item => (
          <TouchableOpacity
            style={{width: 150, height: 150}}
            onPress={() =>
              console.log(
                item?.item.posterpath +
                  item?.item.posterfilelist?.split(';')[10],
              )
            }>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  item?.item.posterpath +
                  item?.item.posterfilelist?.split(';')[10],
              }}
              onError={() => console.log('error')}
            />
            <Text style={styles.titleTextStyle}>{item.item.shorttitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topTextStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
  },
  titleTextStyle: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default CarouselList;
