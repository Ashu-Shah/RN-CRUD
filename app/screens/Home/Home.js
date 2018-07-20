import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import HomeStyles from './HomeStyles';

const Home = (props) => (
    <View style={HomeStyles.container}>
        <Text style={HomeStyles.title}>Welcome to my <Text style={HomeStyles.highlight}>ToDo </Text>App</Text>

        <TouchableOpacity activeOpacity={1} style={HomeStyles.button} onPress={() => props.navigation.navigate('Todo')}>
            <Text style={HomeStyles.buttonText}>Lets Start...!</Text>
        </TouchableOpacity>
    </View>
);

export default Home;