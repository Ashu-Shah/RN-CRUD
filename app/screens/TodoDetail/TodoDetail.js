import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TodoDetailStyles from './TodoDetailStyles';

const TodoDetail = ({navigation}) => {
    let {params} = navigation.state;
    return(
        <View style={TodoDetailStyles.container}>
            <View style={TodoDetailStyles.card}>
                <Text style={TodoDetailStyles.text}>{params.content}</Text>
            </View>
        </View>
    )
};

export default TodoDetail;