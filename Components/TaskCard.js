import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';




export default function TaskCards({horizontalScrollBool}) {

    const isFocused = useIsFocused();
    const [tasksList, setTasksList] = useState([]);

    const loadTasks = async () => {
        const tasks = await AsyncStorage.getItem('Tasks');
        setTasksList(JSON.parse(tasks));
        console.log(JSON.parse(tasks));
    }

    const deleteTask = async (index) => {
        const tempTasks = tasksList;

        const selectedTasks = tempTasks.filter((task, i) => {
            return i != index;
        });

        setTasksList(selectedTasks);
        await AsyncStorage.setItem('Tasks', JSON.stringify(selectedTasks));
    }

    useEffect(() => {
        loadTasks();
    }, [isFocused]);


    const getTypeDetails = (type) => {
        switch (type) {
            case 'Task':
                return { borderColor: 'blue', color: 'blue' };
            case 'Class':
                return { borderColor: 'green', color: 'green' };
            case 'Assignment':
                return { borderColor: 'orange', color: 'orange' };
            case 'Exam':
                return { borderColor: 'red', color: 'red' };
            default:
                return { borderColor: 'grey', color: 'black' };
                
        }
    };

    const getPriorityDetails = (priority) => {
        switch (priority) {
            case 'High':
                return { backgroundColor: 'red' };
            case 'Medium':
                return { backgroundColor: 'orange' };
            case 'Low':
                return { backgroundColor: 'green' };
            default:
                return { backgroundColor: 'grey' };
                
        }
    };


    
    


    return (
        

        <View style={styles.container}>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Upcoming</Text>

                <FlatList data={tasksList} renderItem={({ item, index }) => {

                    const { borderColor, color } = getTypeDetails(item.taskType);
                    const { backgroundColor } = getPriorityDetails(item.priority);

                    return (
                        <View style={styles.card}>

                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{item.taskName}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>

                            <View style={styles.typeContainer}>
                                <View style={[styles.lining, { borderColor }]}>
                                    <Text style={{ color }}>{item.taskType}</Text>
                                </View>
                                <View style={[styles.priorityContainer, { backgroundColor }]}>
                                    <Text style={styles.priorityText}>{item.priority}</Text>
                                </View>
                            </View>

                            <View>
                                <Text>{item.dueDate}</Text>
                            </View>

                            <TouchableOpacity style={styles.dangerButton} onPress={() => {deleteTask(index)}}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>

                        </View>
                            
                    );
                }} horizontal={horizontalScrollBool}/>
            </View>

        </View>



    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#Eaeaea',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        
        marginBottom: 16,

    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666', // Medium grey
        marginTop: 4,
        width: 200,
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    lining: {
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    priorityContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    priorityText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8', 
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
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#f2994a',
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    dangerButton: {
        backgroundColor: '#f44336',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    tasksContainer: {
        width: '90%',
        height: 160,
        borderWidth: 1
    }




});