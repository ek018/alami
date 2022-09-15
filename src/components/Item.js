import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {convertToRupiah} from '../utils'

const Item = ({item, incrementQty, decrementQty}) => {
  const disableReduce = item.stock === 100 ? true : false;
  const disableIncrease = item.stock === 0 ? true : false;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text style={styles.subTitleText}>stock : {item.stock}</Text>
        <Text style={styles.suplementaryText}>{convertToRupiah(item.price)}</Text>
      </View>
      <View style={styles.containterItem}>
        <TouchableOpacity onPress={decrementQty} disabled={disableReduce}>
          <View style={[styles.itemCount, {borderRightWidth: 0}]}>
            <Text style={disableReduce ? styles.invalid : styles.valid}>
              {' '}
              -{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemCount}>
          <Text> {item.qty} </Text>
        </View>
        <TouchableOpacity onPress={incrementQty} disabled={disableIncrease}>
          <View style={[styles.itemCount, {borderLeftWidth: 0}]}>
            <Text style={disableIncrease ? styles.invalid : styles.valid}>
              {' '}
              +{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  subTitleText: {
    fontSize: 12,
    marginBottom: 16
  },
  suplementaryText: {
    fontSize: 14,
    color: "#00B8B4"
  },
  containterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCount: {
    borderColor: '000',
    borderWidth: 1,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invalid: {
    color: 'grey',
  },
  valid: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Item;
