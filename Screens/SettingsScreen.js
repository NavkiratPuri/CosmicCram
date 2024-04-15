import react from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {

    const handleReset = () => {
        AsyncStorage.removeItem('username');
        console.log(' reset pressed--');
    }
    

    return (
        <SafeAreaView>
            
            <Button title="Reset Username" onPress={handleReset} />


        </SafeAreaView>

        

    );
}



export default SettingsScreen;
