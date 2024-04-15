import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react'; 

function PhotosScreen() {
    const [photos, setPhotos] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const loadPhotos = async () => {
        const photoUris = await AsyncStorage.getItem('photoUris');
        setPhotos(JSON.parse(photoUris) || []);
    };

    useFocusEffect(
        useCallback(() => {
            loadPhotos();
        }, [])
    );

    const handleDeletePhoto = async (uri) => {
        const updatedPhotos = photos.filter(photo => photo !== uri);
        await AsyncStorage.setItem('photoUris', JSON.stringify(updatedPhotos));
        setPhotos(updatedPhotos);
        setSelectedImage(null);  
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={photos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedImage(item)}>
                        <Image source={{ uri: item }} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                )}
            />
            {selectedImage && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={!!selectedImage}
                    onRequestClose={() => setSelectedImage(null)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={{ uri: selectedImage }} style={{ width: 300, height: 300 }} />
                            <Button title="Close" onPress={() => setSelectedImage(null)} />
                            <Button title="Delete Photo" color="red" onPress={() => handleDeletePhoto(selectedImage)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default PhotosScreen;


