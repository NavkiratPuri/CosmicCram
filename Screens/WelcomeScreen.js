import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const WelcomeScreen = ({navigation}) => {
    const [username, setUsername] = useState('');

    const handleNameChange = (text) => {
        setUsername(text);
        
    };

    const handleNext = () => {
        if (username && username.trim() !== '') {
            
            AsyncStorage.setItem('username', username);
            //navigation.navigate('HomeStack');
            console.log('next pressed username:', username);

            navigation.navigate('Welcome');
        }
    }

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cosmic Cram!</Text>
            <Text style={styles.subtitle}>Please enter your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={username}
                onChangeText={handleNameChange}
            />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default WelcomeScreen;