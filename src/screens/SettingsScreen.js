import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Pressable, Image, Linking, Modal,
} from 'react-native';
import Share from 'react-native-share';

export default function SettingsScreen({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(0);

    const handleShare = async () => {
        try {
            await Share.open({
                message: 'Check out this awesome app!',
                // url: 'https://example.com', /
            });
        } catch (error) {
            console.log('Share error:', error);
        }
    };

    const openTerms = () => {
        Linking.openURL('https://www.termsfeed.com/live/071b2138-9ce1-45c6-963e-175ce97e25a7');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
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

            {/* Settings List */}
            <View style={styles.listContainer}>


                {/* Rate the App */}
                <Pressable style={styles.listItem} onPress={() => {setModalVisible(true);}}>
                    <Text style={styles.itemText}>Rate the App</Text>
                </Pressable>
                <View style={styles.separator} />


                <Pressable style={styles.listItem} onPress={handleShare}>
                    <Text style={styles.itemText}>Share the App</Text>
                </Pressable>
                <View style={styles.separator} />


                <Pressable style={styles.listItem} onPress={openTerms}>
                    <Text style={styles.itemText}>Terms of Use</Text>
                </Pressable>
            </View>
            <Modal transparent={true} visible={modalVisible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Rate the App</Text>
                        <View style={styles.starsRow}>
                                {/*<TouchableOpacity onPress={() => setRating(num)}>*/}
                                    <View style={styles.starsRow}>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <TouchableOpacity key={num} onPress={() => setRating(num)}>
                                                <Text style={styles.emoji}>
                                                    {rating >= num ? '⭐' : '☆'}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                {/*</TouchableOpacity>*/}
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 16,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 15,
    },
    starsRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#A22323',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 12,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emoji: {
        fontSize: 32,
        marginHorizontal: 4,
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
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    listItem: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#555',
    },
});
