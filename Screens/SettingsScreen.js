import react from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {

    const handleNameClear = async () => {
      try{
        await AsyncStorage.removeItem('username');
        Alert.alert('Username cleared restart to reset Username');
        console.log(' Cleared Username--');
      }catch(e){
        console.log(e);
      }
    }

    const handleTaskClear = async () => {
        try {
          await AsyncStorage.removeItem('Tasks')
          Alert.alert('Tasks Cleared')
          
        } 
        catch(e) {
          
        }
      
        console.log('Tasks Cleared--')
      }

    const handleDBClear = async () => {
      try {
        await AsyncStorage.clear()

        Alert.alert('All App Storage Cleared')

      } catch(e) {
        // clear error
      }
    
        console.log('DB Cleared--');
    }
    

    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={handleNameClear}>
                <Text style={styles.buttonText}>Clear Username</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.dangerButton} onPress={handleTaskClear}>
                <Text style={styles.buttonText}>Reset Tasks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dangerButton} onPress={handleDBClear}>
                <Text style={styles.buttonText}>Reset All App Storage</Text>
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
