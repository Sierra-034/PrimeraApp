/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.dimensions}>W: {width}, H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderBottomWidth: 2,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5556D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    dimensions: {
        fontSize: 30,
        textAlign: 'center',
    },
});
