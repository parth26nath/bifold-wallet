import { View, Text } from 'react-native';
import React from 'react';
import { BUTTON_STYLE1 } from '../../constants/fonts';

const AadharSchema = ({ aadharschema }) => {
    return (
        <View style={{ ...styles.container, ...BUTTON_STYLE1 }}>
            <View style={styles.row}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{aadharschema.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>DOB</Text>
                <Text style={styles.value}>{aadharschema.DOB}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>SEX</Text>
                <Text style={styles.value}>{aadharschema.Sex}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Aadhaarno</Text>
                <Text style={styles.value}>{aadharschema.Aadhaarno}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>{aadharschema.Address}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>VID</Text>
                <Text style={styles.value}>{aadharschema.VID}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>IssueDate</Text>
                <Text style={styles.value}>{aadharschema.Issuedate}</Text>
            </View>
        </View>
    );
};

const styles = {
    container: {
        width: '93%',
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2%',
    },
    label: {
        flex: 1,
        color: 'black'
    },
    value: {
        flex: 1,
        textAlign: 'left',
        color: 'black'
    },
};

export default AadharSchema;
