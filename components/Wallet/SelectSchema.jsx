import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectSchema = ({ schemaList, onSchemaSelect }) => {
    const [selectedSchemas, setSelectedSchemas] = useState([]);

    useEffect(() => {
        // Call onSchemaSelect whenever selectedSchemas change
        onSchemaSelect(selectedSchemas);
    }, [selectedSchemas, onSchemaSelect]);

    const handleCheckboxToggle = (schema) => {
        console.log("checkbox toggled");
        const isSelected = selectedSchemas.includes(schema);
        if (isSelected) {
            setSelectedSchemas(selectedSchemas.filter((selected) => selected !== schema));
        } else {
            setSelectedSchemas([...selectedSchemas, schema]);
        }
    };

    return (
        <View className="p-[2%] border-2 border-grey2 w-full rounded-lg">
            {schemaList.map((item) => (
                <View key={item.key} className="flex-row justify-between items-center gap-[20%]">
                    <Text className="text-[#636363]">{item.label}</Text>
                    <TouchableOpacity onPress={() => handleCheckboxToggle(item.key)}>
                        <View style={[styles.checkbox, selectedSchemas.includes(item.key) && styles.checked]}>
                            {selectedSchemas.includes(item.key) && <Text style={styles.checkMark}>&#10003;</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#CBCBCC',
        marginRight: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#5869E6',
    },
    labelText: {
        marginRight: 10,
    },
    checkMark: {
        color: 'white',
        fontSize: 12,
    },
});

export default SelectSchema;

