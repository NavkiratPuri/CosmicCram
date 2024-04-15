import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const NewTask = () => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium'); // Default priority
  
    const handleSave = () => {
      // Implement your save logic here
      console.log(taskName, dueDate, priority);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Task</Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.headerButton}>Save Task</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={taskName}
          onChangeText={setTaskName}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Select due date"
          value={dueDate}
          onChangeText={setDueDate}
        />
  
        <View style={styles.priorityContainer}>
          <TouchableOpacity
            onPress={() => setPriority('High')}
            style={[styles.priorityButton, priority === 'High' && styles.priorityButtonActive]}
          >
            <Text style={styles.priorityText}>High</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => setPriority('Medium')}
            style={[styles.priorityButton, priority === 'Medium' && styles.priorityButtonActive]}
          >
            <Text style={styles.priorityText}>Medium</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => setPriority('Low')}
            style={[styles.priorityButton, priority === 'Low' && styles.priorityButtonActive]}
          >
            <Text style={styles.priorityText}>Low</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.actionText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerButton: {
      fontSize: 18,
      color: '#007bff', // A blue color for the button text
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 15,
      marginBottom: 20,
      fontSize: 16,
    },
    priorityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    priorityButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    priorityButtonActive: {
      backgroundColor: '#007bff', // Blue background for active state
    },
    priorityText: {
      fontSize: 16,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cancelButton: {
      padding: 15,
      backgroundColor: '#ccc', // Grey background for cancel button
      borderRadius: 5,
    },
    saveButton: {
      padding: 15,
      backgroundColor: '#28a745', // Green background for save button
      borderRadius: 5,
    },
    actionText: {
      fontSize: 16,
      color: '#fff', // White text for action buttons
      textAlign: 'center',
    },
  });
  
  export default NewTask;