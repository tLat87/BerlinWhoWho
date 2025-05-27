import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function HowToPlayScreen({navigation}) {
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
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>HOW TO PLAY</Text>

            </View>

            <ScrollView style={styles.body}>
                {/* Mission */}
                <Text style={styles.sectionTitle}>🎯 Your Mission</Text>
                <Text style={styles.text}>
                    Find out who's who in your group.{"\n"}
                    Unmask the Spy, confuse the others, or complete your secret role.{"\n"}
                    Only one device is needed — pass it around!
                </Text>

                {/* The Secret */}
                <Text style={styles.sectionTitle}>📍 The Secret</Text>
                <Text style={styles.text}>
                    At the start of each round, most players will see a real Berlin location.{"\n"}
                    But one or more players will get no location or a fake one.
                </Text>

                {/* Ask Questions */}
                <Text style={styles.sectionTitle}>🔍 Ask Questions</Text>
                <Text style={styles.text}>
                    Each player asks one question to another.{"\n"}
                    Be subtle — don’t give the location away.{"\n"}
                    But pay close attention: someone is faking it.
                </Text>

                {/* Time to Vote */}
                <Text style={styles.sectionTitle}>📩 Time to Vote</Text>
                <Text style={styles.text}>
                    After everyone asks a question, it’s time to vote:{"\n"}
                    Who do you think is the Spy?{"\n"}
                    You only get one guess!
                </Text>

                {/* End of Round */}
                <Text style={styles.sectionTitle}>🏁 End of Round</Text>
                <Text style={styles.text}>
                    • If the Spy is found — the team scores!{"\n"}
                    • If the Spy survives — they try to guess the location.{"\n"}
                    • Special roles may change the outcome…
                </Text>

                <Text style={[styles.text, { marginTop: 20 }]}>
                    Can you spot the lies, find allies, or play everyone like a piano?
                </Text>
                <View style={{marginBottom: 70}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
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
    body: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 20,
    },
    text: {
        color: '#ccc',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        lineHeight: 20,
    },
});
