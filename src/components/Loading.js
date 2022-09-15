import React, {useRef} from 'react';
import {Animated, View, StyleSheet, Dimensions} from 'react-native';

const Loading = ({animationFinished}) => {
  const progressBar = useRef(new Animated.Value(0)).current;

  Animated.timing(progressBar, {
    toValue: 389,
    duration: 5200,
    useNativeDriver: false,
  }).start(({finished}) => {
    if (finished) {
      animationFinished(finished);
    }
  });

  return (
    <View style={styles.container}>
      <View
        style={styles.containerBar}
        onTouchStart={e => {
          Animated.timing(progressBar).stop();
        }}
        onTouchEnd={e => {
          progressBar.removeListener();
          Animated.timing(progressBar, {
            toValue: 389,
            duration: 5200,
            useNativeDriver: false,
          }).start(({finished}) => {
            if (finished) {
              animationFinished(finished);
            }
          });
        }}>
        <Animated.View style={[styles.fillin, {width: progressBar}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBar: {
    width: Dimensions.get('screen').width - 24,
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 10,
    marginBottom: 80,
  },
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  fillin: {
    height: 40,
    backgroundColor: '#00B8B4',
    marginBottom: 100,
    borderRadius: 10,
  },
});

export default Loading;
