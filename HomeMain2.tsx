import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function HomeMain2() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <TextInput
        style={styles.input}
        placeholder="Enter PRN NO"
        placeholderTextColor={'black'}
      />
      <View>
      <Button title="Search Trains " color={'#312e6c'}/>
      </View>
      
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start',
      
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width:320,
      color:'black',
    
    },
    
  });
  
  export default HomeMain2;