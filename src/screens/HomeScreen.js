import {
  View,
  Text,
  NativeModules,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemList from '../components/ItemList';

const HomeScreen = () => {
  const {DeviceMethod} = NativeModules;
  const [deviceID, setDeviceId] = useState('');

  useEffect(() => {
    DeviceMethod.getPhoneID()
      .then(res => {
        setDeviceId(res);
      })
      .catch(err => {
        console.log(`err : ${err}`);
      });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>DevideID:</Text>
          <Text style={styles.subtitleText}>{deviceID}</Text>
        </View>
        <ItemList></ItemList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 12,
  },
  loadingContainer: {
    flex: 0.2,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;
