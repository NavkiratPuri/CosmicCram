import React, { useState, useEffect, useRef } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const savePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const filename = photo.uri.split('/').pop();
      const newPath = FileSystem.documentDirectory + filename;

      try {
        await FileSystem.moveAsync({
          from: photo.uri,
          to: newPath,
        });
        const existingUris = await AsyncStorage.getItem('photoUris');
        const updatedUris = existingUris ? JSON.parse(existingUris) : [];
        updatedUris.push(newPath);
        await AsyncStorage.setItem('photoUris', JSON.stringify(updatedUris));
        console.log('Photo saved:', newPath);
      } catch (e) {
        console.error('Error saving photo', e);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View style={styles.cameraContainer}>
          <Button
            title="Take Photo" color='#f2994a'
            onPress={savePhoto}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
});

export default CameraScreen;
