import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function GameStartScreen({ navigation }) {
    const handlePress = () => {
        navigation.pop(3);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LET THE QUESTIONS BEGIN!</Text>
            <Text style={styles.subtitle}>Ask one question. Listen closely.</Text>
            <Image
                source={require('../assets/img/Ellipse7.png')}
                style={{position: 'absolute',left: 0}}
            />
            <Image
                source={require('../assets/img/Ellipse6.png')}
                style={{position: 'absolute',right: 0, bottom: 0}}
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <View style={styles.arrowCircle}>
                    <Text style={styles.arrow}>→</Text>
                </View>
                <Text style={styles.buttonText}>PLAY</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase'
    },
    subtitle: {
        fontSize: 26,
        color: '#ccc',
        zIndex: 1,
        textAlign: 'center',
        marginBottom: 100
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        overflow: 'hidden',
        height: 60,
        width: '90%'
    },
    arrowCircle: {
        backgroundColor: '#A22323',
        borderRadius: 20,
        width: 80,
        height: 40,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    arrow: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        backgroundColor: '#a00',
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '900',
        color: '#fff',
        fontSize: 20
    }
});
