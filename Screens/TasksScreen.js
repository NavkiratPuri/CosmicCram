import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import TaskCards from '../Components/TaskCard';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const TasksScreen = ({ navigation }) => {

    const isFocused = useIsFocused();




    useEffect(() => {
        //loadTasks();
    }, [isFocused]);

    return (

        <View style={styles.container}>


            
            {/* display TaskCards */}

             <TaskCards horizontalScrollBool={false}/> 

            <TouchableOpacity onPress={() => navigation.navigate("NewTask")} style={styles.newTaskButton}>
                <Text>Add New Task</Text>
            </TouchableOpacity>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    profileContainer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    editProfileButton: {
        marginTop: 5,
        padding: 10,
    },
    sectionContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    viewAllButton: {
        padding: 10,
        alignSelf: 'flex-end',
    },
    testsContainer: {
        padding: 15,
    },
    tipsContainer: {
        padding: 15,
        marginTop: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e1e1e1',
    },
    reminderButton: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#4e9af1',
        borderRadius: 8,
        alignSelf: 'center',
    },
    newTaskButton: {
        marginTop: 15,
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#f2994a',
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    dangerButton: {
        backgroundColor: '#f44336',
        padding: 15,
        borderRadius: 5,
        margin: 10,
        width: '30%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    tasksContainer: {
        width: '90%',
        height: 160,
        borderWidth: 1
    }

});

export default TasksScreen;