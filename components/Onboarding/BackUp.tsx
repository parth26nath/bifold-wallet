import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import DocumentPicker, {
  DocumentPickerType,
  DocumentPickerOptions,
} from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackUp = () => {
  const [backupPath, setBackupPath] = useState('');

  const handleFileUpload = async () => {
    try {
      const options: DocumentPickerOptions = {
        type: [DocumentPicker.types.allFiles],
      };
      const res = await DocumentPicker.pick(options);
      setBackupPath(res.uri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        Alert.alert('File selection cancelled');
      } else {
        Alert.alert('Error', 'Failed to pick a document. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{backupPath || 'Select backup file'}</Text>
      </View>
      <TouchableOpacity onPress={handleFileUpload} style={styles.button}>
        <AntDesign name="addfile" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#733DF5',
    borderWidth: 3,
    borderStyle: 'dashed',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#5869E6',
    padding: 10,
    borderRadius: 5,
  },
});

export default BackUp;