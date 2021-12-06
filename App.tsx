import React from 'react';
import {Text, View} from 'react-native';

export const App = () => {
  const styles = {
    viewStyles: {
      flex: 1,
      justifyContent: 'center',
    },
    textStyles: {
      fontSize: 45,
      textAlign: 'center',
    },
  };
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Hola mundo</Text>
    </View>
  );
};
