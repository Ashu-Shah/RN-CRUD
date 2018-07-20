import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        marginHorizontal: 10,
        marginVertical: 5,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorBox: {
        width: 5,
        height: 50,
        marginRight: 10
    },
    text: {
        color: '#a1a1a1',
        fontSize: 16,
        flex: 1
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