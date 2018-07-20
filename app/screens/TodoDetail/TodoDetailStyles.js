import {StyleSheet} from 'react-native';

const TodoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    card: {
        backgroundColor:  '#fff',
        minHeight: 200,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10
    },
    text: {
        fontSize: 16,
        color: '#a1a1a1'
    }
});

export default TodoDetailStyles;