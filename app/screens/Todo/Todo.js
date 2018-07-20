import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoStyles from './TodoStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ListItem} from '../../components/ListItem/index';

class Todo extends Component{

    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            todos: [],
            editIndex: ''
        };
    }

    handlePress = (content, index) => () => {
        this.props.navigation.navigate('TodoDetail', {content, index});
    };

    handleDelete = (index) => () => {
        let { todos } = this.state;
        todos.splice(index, 1);
        this.setState({todos})
    };

    handleEdit = (index) => () => {
        let { todos } = this.state;
        this.setState({editIndex: index, todo: todos[index]});
    };

    renderItem = ({item, index}) => (
        <ListItem
            onPress={this.handlePress(item, index)}
            text={item}
            deleteItem={this.handleDelete(index)}
            edit={this.handleEdit(index)}
            color={index}
        />
    );

    onChange = (state, val) => {
        this.setState({
            [state]: val
        })
    };

    submit = () => {
        let {todo, todos, editIndex} = this.state;
        todo = todo.trim();
        if(editIndex !== '') {
            todos[editIndex] = todo
        }
        else if(todo.length) {
            todos.push(todo);
        }
        this.setState({todos, todo: '', editIndex: ''});
        Keyboard.dismiss();
    };

    render() {
        let {todos, todo, editIndex} = this.state;

        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={TodoStyles.container}>
                    <View style={TodoStyles.wrapper}>
                        {todos.length ?
                            <FlatList
                                data={todos}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                style={{flex: 1}}
                            />
                            : null
                        }
                    </View>
                    <View style={TodoStyles.inputWrapper}>
                        <TextInput
                            placeholder="Write some todo"
                            value={todo}
                            underlineColorAndroid="transparent"
                            autoCorrect={false}
                            keyboardType="default"
                            onChangeText={this.onChange.bind(this, 'todo')}
                            style={TodoStyles.input}
                        />
                        <TouchableOpacity onPress={this.submit} activeOpacity={0.5} style={TodoStyles.createButton}>
                            <MaterialIcons name="add" style={TodoStyles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Todo;