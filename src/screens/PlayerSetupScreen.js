import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet, Image, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ROLES = [
    {
        emoji: '🧑‍🌆',
        name: 'Local',
        description: `You are a Local.\nYou know the secret Berlin location.\nAsk smart questions and spot the Spy — but don’t reveal too much!`,
    },
    {
        emoji: '🕵️‍♂️',
        name: 'Spy',
        description: `You are the Spy.\nYou don’t know the location.\nListen carefully, blend in, and guess the location at the end!`,
    },
    {
        emoji: '🕵️‍♀️',
        name: 'Detective',
        description: `You are the Detective.\nYou’re a Local with power. You can ask two different players this round.\nBut remember — you must vote first.`,
    },
    {
        emoji: '🧥',
        name: 'Double Agent',
        description: `You are a Double Agent.\nYou know the location — but you secretly help the Spy.\nProtect the Spy and mislead others.\nIf the Spy survives, you win too.`,
    },
    {
        emoji: '🌀',
        name: 'Confuser',
        description: `You are the Confuser.\nYou’re a Local… sort of.\nYour goal: create confusion and mislead everyone.\nBe subtle — don’t get caught!`,
    },
    {
        emoji: '🎭',
        name: 'Pretender',
        description: `You are the Pretender.\nYou saw a fake location.\nYou must figure out the real location — and act like you know it.`,
    },
    {
        emoji: '🤐',
        name: 'Mute',
        description: `You are the Mute.\nYou’re a Local, but you cannot speak freely.\nAnswer with “Yes,” “No,” or gestures only.`,
    },
    {
        emoji: '👁️',
        name: 'Observer',
        description: `You are the Observer.\nYou’re a Local who knows the Spy.\nHelp others vote them out — but don’t give yourself away!`,
    },
    {
        emoji: '🔥',
        name: 'Saboteur',
        description: `You are the Saboteur.\nYou win only if everyone else loses.\nMisdirect, confuse, disrupt. You’re not here to help anyone.`,
    },
];


export default function PlayerSetupScreen() {
    const [players, setPlayers] = useState(['Player 1']);
    const navigation = useNavigation();

    const addPlayer = () => {
        setPlayers([...players, '']);
    };

    const removePlayer = (index) => {
        const updated = [...players];
        updated.splice(index, 1);
        setPlayers(updated);
    };

    const updatePlayer = (text, index) => {
        const updated = [...players];
        updated[index] = text;
        setPlayers(updated);
    };

    const handleStart = () => {
        const filtered = players.filter((name) => name.trim() !== '');
        if (filtered.length >= 2) {
            const shuffledRoles = shuffleArray(ROLES).slice(0, filtered.length);
            const playerRoles = filtered.map((name, index) => ({
                name,
                ...shuffledRoles[index],
            }));
            navigation.navigate('RoleRevealScreen', { playerRoles });
        } else {
            Alert.alert('Add at least 2 players');
        }
    };

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };


    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/img/Ellipse7.png')}
                style={{position: 'absolute',left: 0}}
            />
            <Image
                source={require('../assets/img/Ellipse6.png')}
                style={{position: 'absolute',right: 0, bottom: 0}}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.goBack()}}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>SETTINGS</Text>
            </View>

            {/* Player Inputs */}
            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.playerRow}>
                        <TextInput
                            style={styles.input}
                            placeholder={`Player ${index + 1}`}
                            placeholderTextColor="#999"
                            value={item}
                            onChangeText={(text) => updatePlayer(text, index)}
                        />
                        {players.length > 1 && (
                            <TouchableOpacity

                                onPress={() => removePlayer(index)}
                            >
                                <Image source={require('../assets/img/trfyguhi.png')}/>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />

            <View style={styles.footer}>
                <TouchableOpacity onPress={addPlayer}>
                    <Image source={require('../assets/img/fqwffqwf.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                    <Text style={styles.startButtonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    backButton: {
        backgroundColor: '#A22323',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        color: '#fff',
        fontSize: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    playerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        backgroundColor: '#111',
        color: '#fff',
        padding: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 16,
    },
    removeButton: {
        marginLeft: 10,
        backgroundColor: '#a00',
        borderRadius: 25,
        padding: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#d2b48c',
        borderRadius: 25,
        padding: 10,
    },
    startButton: {
        flex: 1,
        marginLeft: 20,
        backgroundColor: '#a00',
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
