//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text> Gategories </Text>

            <View>
                {/* Entering data for ,meals */}
                <Text>Meals</Text>
                <Image style={styles.gates} source={require('../assets/meal.jpeg')} />
            </View>
            <View>
                {/* Entering data for drinks */}
                <Text>Drinks</Text>
                <Image style={styles.gates} source={require('../assets/drinks.jpg')} />
            </View>
            <View>
                {/* Entering data for deserts */}
                <Text>Deserts</Text>
                <Image style={styles.gates} source={require('../assets/desert.jpg')} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    gates: {
        width: '20vw',
        height: '20vh',
        marginBottom: '5%',
    },
});

export default Home;
