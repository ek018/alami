import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {dataDummy} from '../dataDummy/data';
import Item from './Item';

const newData = dataDummy.map(item => ({...item, qty: 0}));

const ItemList = () => {
  const [data, setData] = useState(newData);

  const renderItem = ({item, index}) => {
    return (
      <Item
        item={item}
        incrementQty={() => changeQty(index, 'increment')}
        decrementQty={() => changeQty(index, 'decrement')}></Item>
    );
  };

  const changeQty = (index, value) => {
    let copyData = [...data];
    if (value === 'increment') {
      copyData[index].qty += 1;
      copyData[index].stock -= 1;
    } else {
      copyData[index].qty -= 1;
      copyData[index].stock += 1;
    }
    setData(copyData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#029DC6',
  },
  listContainer: {
    height: '90%',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default ItemList;
