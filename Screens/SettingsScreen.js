import react from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {

    const handleReset = () => {
        AsyncStorage.removeItem('username');
        console.log(' Reset Username--');
    }

    const handleTaskClear = async () => {
        try {
          await AsyncStorage.removeItem('Tasks')
        } 
        catch(e) {
          
        }
      
        console.log('Tasks Cleared--')
      }
    

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset Username</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dangerButton} onPress={handleTaskClear}>
                <Text style={styles.buttonText}>Reset Tasks</Text>
            </TouchableOpacity>

        </SafeAreaView>

        

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#f2994a', 
    padding: 15,
    borderRadius: 5,
    marginVertical: 10, 
    width: '90%', 
    alignItems: 'center', 
  },
  dangerButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10, 
    width: '90%', 
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', 
    fontWeight: 'bold', 
  },
});



export default SettingsScreen;
