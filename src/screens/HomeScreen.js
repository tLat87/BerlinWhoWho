import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import {addLocation} from '../redux/slices/locationsSlice';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/img/Groupfqwf1.png')}
                style={styles.logo}
            />
            <Image
                source={require('../assets/img/Ellipse7.png')}
                style={{position: 'absolute',left: 0}}
            />
            <Image
                source={require('../assets/img/Ellipse6.png')}
                style={{position: 'absolute',right: 0, bottom: 0}}
            />

            <Text style={styles.title}>WHO’S WHO</Text>

            <TouchableOpacity style={styles.startGameButton} onPress={() => navigation.navigate('PlayerSetupScreen')}>
                <View style={styles.startButtonContent}>
                    <View style={styles.arrowCircle}>
                        <Text style={styles.arrow}>→</Text>
                    </View>
                    <Text style={styles.buttonText}>Start Game</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlinedButton} onPress={() => navigation.navigate('HowToPlayScreen')}>
                <Text style={styles.buttonText}>How to Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlinedButton} onPress={() => {navigation.navigate('LocationsScreen')}}>
                <Text style={styles.buttonText}>Locations</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlinedButton} onPress={()=>{navigation.navigate('SettingsScreen')}}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // тёмный градиентный фон можно заменить на градиент позже
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    logo: {
        width: 200,
        height: 120,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: 38,
        fontWeight: '900',
        marginBottom: 40,
    },
    startGameButton: {
        borderWidth: 1,
        // marginHorizontal: 20
        borderColor: '#fff',
        borderRadius: 40,
        paddingVertical: 14,
        paddingHorizontal: 20,
        width: '90%',
        marginBottom: 20,
    },
    startButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    arrowCircle: {
        backgroundColor: '#A22323',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    arrow: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    outlinedButton: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 40,
        paddingVertical: 14,
        paddingHorizontal: 20,
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default HomeScreen;
