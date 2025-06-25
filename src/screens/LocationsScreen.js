import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
    Modal,
    SafeAreaView, Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addLocation} from '../redux/slices/locationsSlice';

const LocationsScreen = ({navigation}) => {
    const locations = useSelector((state) => state.locations.list);
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [newLocation, setNewLocation] = useState('');

    const handleAddLocation = () => {
        if (newLocation.trim()) {
            dispatch(addLocation(newLocation.trim()));
            setNewLocation('');
            setModalVisible(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
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
                <Text style={styles.title}>LOCATIONS</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButton}>＋</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.title, {color: "#aaa" , textAlign: 'center', width: "90%", alignSelf: 'center'}]}>Add locations to have been to, and this determines how often you will come across certain roles</Text>
            <FlatList
                data={locations}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ padding: 16 }}
                renderItem={({ item }) => (
                    <View style={styles.locationItem}>
                       <Image source={require('../assets/img/Frameкfqwfqwf.png')}/>
                        <Text style={styles.locationText}>{item}</Text>
                    </View>
                )}
            />

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>ADD OWN LOCATION</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Location"
                            placeholderTextColor="#aaa"
                            value={newLocation}
                            onChangeText={setNewLocation}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancel}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={handleAddLocation}>
                                <Text style={styles.saveText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
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
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    addButton: {
        color: '#fff',
        fontSize: 28,
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    pin: {
        fontSize: 20,
        color: '#A22323',
        marginRight: 8,
    },
    locationText: {
        color: '#fff',
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '900',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#111',
        borderRadius: 12,
        padding: 20,
        width: '80%',
        borderWidth: 1,
        borderColor: '#fff',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#fff',
        height: 40,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancel: {
        color: '#fff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#A22323',
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    saveText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LocationsScreen;
