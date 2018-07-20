import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingLeft: 10,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5
    },
    rowButton: {
        flexWrap: 'wrap',
        flex: 1
    },
    text: {
        color: '#a1a1a1',
        fontSize: 16
    },
    sideButtons: {
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
        height: 50,
        paddingHorizontal: 15
    },
    icon: {
        color: '#fff',
        fontSize: 24
    },
    delete: {
        backgroundColor: '#c0392b'
    }
});

export default styles;