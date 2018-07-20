import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var COLOR_PALETTE = [ "#317256", "#f2b91a", "#ef5ea0", "#018cb3", "#3e2d56", "#ef4523", "#959234", "#23181b", "#111326", "#220e26", "#388564", "#ebc240", "#ee7db1", "#00a1d2", "#523474", "#f15c22", "#b2b435", "#452e21", "#1a224c", "#43164d", "#2ba267", "#eecb5f", "#f4a1c5", "#1ebece", "#77589a", "#f37420", "#cdd529", "#543e2f", "#242e65", "#592366", "#1ba681", "#f1d680", "#f7bed7", "#43c3d8", "#9f8ac1", "#f68c1e", "#d8e152", "#5a4d44", "#2f3f8b", "#7a298a", "#55be90", "#f0dea6", "#f8c0cc", "#86d2dd", "#cab6d8", "#f9a550", "#e8e85b", "#c39a6b", "#5866a4", "#c389bc"];

class ListItem extends Component{

    renderColor(color) {
        return {
            backgroundColor: COLOR_PALETTE[color]
        }
    };

    render() {
        let {onPress, text, edit, deleteItem, color} = this.props;

        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.rowButton} onPress={onPress}>
                    <View style={[styles.colorBox, this.renderColor(color)]}/>
                    <Text style={styles.text} numberOfLines={2} ellipsizeMode={'tail'}>{text}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={edit} style={styles.sideButtons}>
                    <MaterialIcons name="edit" style={styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={deleteItem} style={[styles.sideButtons, styles.delete]}>
                    <MaterialIcons name="delete-forever" style={styles.icon}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListItem;