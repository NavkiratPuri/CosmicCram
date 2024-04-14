import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

//Homepage UI

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://www.pexels.com/photo/portrait-of-woman-15678490/' }} style={styles.profileImage} />
        <Text style={styles.greeting}>John Jones</Text>
        <Text>Welcome to CosmicCram Home</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>In Progress</Text>
        {/* Add your in-progress classes here */}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        {/* Add your upcoming classes here */}
      </View>

      <View style={styles.testsContainer}>
        <Text style={styles.sectionTitle}>Upcoming Tests</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text>View All</Text>
        </TouchableOpacity>
        {/* Add your tests here */}
      </View>

      <View style={styles.tipsContainer}>
        <Text>Study Tips - CosmicCram Team</Text>
        {/* Add your study tips content here */}
      </View>

      <TouchableOpacity style={styles.reminderButton}>
        <Text>Set Reminder</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newTaskButton}>
        <Text>Add New Task</Text>
      </TouchableOpacity>
    </ScrollView>
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
});

export default App;
