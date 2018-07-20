import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        color: '#fff'
    },
    highlight: {
        fontSize: 24,
        color: '#c0392b',
        fontWeight: '600'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#c0392b',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontStyle: 'italic'
    }
});

export default HomeStyles;