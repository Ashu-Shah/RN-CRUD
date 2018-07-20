import {StyleSheet} from 'react-native';

const TodoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    wrapper: {
        flex: 1,
        marginVertical: 5
    },
    inputWrapper: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#fff',
        height: 48,
        flex: 1,
        fontSize: 16,
        color: '#a1a1a1',
        paddingHorizontal: 15
    },
    createButton: {
        height: 48,
        backgroundColor: '#2c3e50',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 24,
        color: '#fff'
    }
});

export default TodoStyles;