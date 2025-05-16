import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../assets/img/9003de033c5b81a2eaf7945dffcd17d071e4180e.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            <View style={styles.content}>
                <Image
                    source={require('../assets/img/Groupfqwf1.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>WELCOME TO SPYPLAY</Text>
                <Text style={styles.subtitle}>IN BERLIN: WHO’S WHO</Text>
                <Text style={styles.tagline}>One phone. Many faces. One truth.</Text>

                <Text style={styles.description}>
                    Dive into the shadows of Berlin — a city of secrets, where no one is quite who they seem.{"\n"}
                    Each round, you’ll receive a hidden role. Some will know the secret location.{"\n"}
                    One won’t. That’s the Spy.
                </Text>

                <Text style={styles.question}>
                    Can you spot them — or become them?
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        marginTop: 80,
        paddingHorizontal: 24,
        zIndex: 1
    },
    logo: {
        // width: 64,
        // height: 64,
        marginBottom: 16,
    },
    title: {
        color: '#fff',
        fontSize: 50,
        fontWeight: '900',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },

    subtitle: {
        color: '#fff',
        fontSize: 50,
        fontWeight: '900',
        marginBottom: 16,
    },
    tagline: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
    },
    question: {
        marginTop: 12,
        fontWeight: '900',
        color: '#fff',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#A22323',
        margin: 20,
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        zIndex: 1
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
