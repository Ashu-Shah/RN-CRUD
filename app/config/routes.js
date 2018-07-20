import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Home from '../screens/Home/Home';
import Todo from '../screens/Todo/Todo';
import TodoDetail from '../screens/TodoDetail/TodoDetail';

const renderTitle = (title) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: '#2c3e50', fontWeight: 'bold'}}>{title}</Text>
    </View>
);

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Todo: {
        screen: Todo,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => renderTitle("Todo's"),
            headerRight: (<View/>)
        })
    },
    TodoDetail: {
        screen: TodoDetail,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => renderTitle("Todo Detail"),
            headerRight: (<View/>)
        })
    }
}, {
    headerMode: 'screen',
    initialRouteName: "Home"
});