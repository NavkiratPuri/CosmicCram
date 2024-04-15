import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({navigation}) => {
    const [name, setName] = useState('');

    const handleNameChange = (text) => {
        setName(text);
    };

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Cosmic Cram!</Text>
            <Text style={styles.subtitle}>Please enter your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={handleNameChange}
            />
            <Button title="Welcome" onPress={() => navigation.navigate("HomeStack")} />
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