import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RoleRevealScreen({ route, navigation }) {
    const { playerRoles } = route.params;
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const player = playerRoles[index];

    const handleNext = () => {
        if (index < playerRoles.length - 1) {
            setIndex(index + 1);
            setRevealed(false);
        } else {
            navigation.navigate('GameStartScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/img/Ellipse7.png')}
                style={{ position: 'absolute', left: 0 }}
            />
            <Image
                source={require('../assets/img/Ellipse6.png')}
                style={{ position: 'absolute', right: 0, bottom: 0 }}
            />

            {/*<Text style={styles.playerTitle}>{player.name}</Text>*/}

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => !revealed && setRevealed(true)}
                style={styles.card}
            >
                {!revealed ? (
                    <>
                        <Image
                            source={require('../assets/img/Groupfqwf1.png')}
                            style={styles.eyeIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.tapText}>Tap to see your role</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.emoji}>{player.emoji}</Text>
                        <Text style={styles.roleTitle}>
                            You are the <Text style={{ fontWeight: 'bold' }}>{player.name}</Text>
                        </Text>
                        <Text style={styles.description}>{player.description}</Text>
                    </>
                )}
            </TouchableOpacity>

            {revealed && (
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {index === playerRoles.length - 1 ? 'Start Game' : 'Next Player'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'
    },
    playerTitle: {
        color: '#fff', fontSize: 22, marginBottom: 20
    },
    card: {
        backgroundColor: '#111',
        paddingVertical: 60,
        borderRadius: 20,
        padding: 20,
        margin: 20,
        width: '80%',
        minHeight: 300,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    eyeIcon: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    tapText: {
        color: '#aaa',
        fontSize: 18,
        fontStyle: 'italic'
    },
    emoji: {
        fontSize: 100,
        alignSelf: 'center'
    },
    roleTitle: {
        color: '#fff',
        fontSize: 28,
        marginBottom: 10,
        fontWeight: '900',
        alignSelf: 'center',
        textAlign: 'center'
    },
    description: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#a00',
        padding: 15,
        borderRadius: 20,
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
});
