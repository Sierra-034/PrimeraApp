/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#28C4D9',
    },
    caja1: {
        width: 50,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
});
