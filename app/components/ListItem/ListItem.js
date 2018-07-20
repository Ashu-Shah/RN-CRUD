import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({onPress, text, deleteItem, edit}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.rowButton} onPress={onPress}>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode={'tail'}>{text}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={edit} style={styles.sideButtons}>
            <MaterialIcons name="edit" style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteItem} style={[styles.sideButtons, styles.delete]}>
            <MaterialIcons name="delete-forever" style={styles.icon}/>
        </TouchableOpacity>
    </View>
);

export default ListItem;