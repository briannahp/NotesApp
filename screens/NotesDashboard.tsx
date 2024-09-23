import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  NativeModules,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import notesStyles from '../styles/notesStyles';

const { NoteFormModule } = NativeModules; // Destructure the native module


const NotesDashboard: React.FC = () => {
  // State to manage notes and selected note
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', title: 'Example Note 1', content: 'I am Brianna. I am writing a note.', timestamp: new Date().toISOString()},
    { id: '2', title: 'Example Note 2', content: 'This is a different example note.', timestamp: new Date().toISOString()}]);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isAddingNote, setIsAddingNote] = useState(false); 

  const showNativeNoteForm = async () => {
    try {
     console.log('NoteFormModule:', NoteFormModule);
      const result = await NoteFormModule.showNoteForm();
      console.log('NoteFormModule:', NoteFormModule);

      if (result) {
        const newNote = { id: Date.now().toString(), title: result.title, content: result.body, timestamp: new Date().toISOString() };
        setNotes([...notes, newNote]);
      } else {
        Alert.alert('Note creation canceled');
      }
    } catch (error) {
      console.error('Error showing note form:', error);
      Alert.alert('Failed to show note form.');
    }
  };
      
  
  const renderNote = ({ item }: { item: Note }) => (
    <TouchableOpacity
      style={[
        notesStyles.noteItem,
      ]}
      onPress={() => Alert.alert('Note selected', item.title)}
    >
      <Text style={notesStyles.noteTitle}>{item.title}</Text>
      <Text style={notesStyles.noteTimestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={notesStyles.container}>
      <View style={notesStyles.mainContainer}>
        <View style={notesStyles.listContainer}>
          <Text style={notesStyles.headerTitle}>Notes</Text>
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            renderItem={renderNote}
            contentContainerStyle={notesStyles.flatListContent}
          />
          <View style={notesStyles.addNoteContainer}>
            <TouchableOpacity style={notesStyles.addButton} onPress={showNativeNoteForm}>
                <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={notesStyles.detailsContainer}>
          {isAddingNote ? (
            <View style={notesStyles.addNoteForm}>
                
              <TouchableOpacity style={notesStyles.saveButton}>
                <Text style={notesStyles.saveButtonText}>Save Note2</Text>
              </TouchableOpacity>
            </View>
          ) : selectedNote ? (
            <ScrollView contentContainerStyle={notesStyles.noteDetails}>
              <Text style={notesStyles.noteDetailTitle}>{selectedNote.title}</Text>
              <Text style={notesStyles.noteDetailContent}>{selectedNote.content}</Text>
            </ScrollView>
          ) : (
            <Text style={notesStyles.placeholderText}>Select a note or add a new one</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotesDashboard;
