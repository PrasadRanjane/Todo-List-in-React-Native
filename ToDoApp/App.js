/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const devicewidth = Dimensions.get('window').width;


const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("First Note");

  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = notes;
      notesCpy.push(note);
      setNotes(notesCpy);

      setNote("");
    }

  }

  return (
    <>
      <View>
        <Text style={styles.heading}>Take Your Notes / Task</Text>

        <View style={styles.form}>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder='Enter the Task'
            style={styles.field} />
          <View>
            <TouchableOpacity onPress={addNote}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          notes.length === 0 ? (
            <Text style={{fontSize:28, marginTop:20,textAlign:'center'}}>
            No Task Added...!
            </Text>) :
            ( 
          <View>
          {notes.map((note,index) =>(
            <View key={index} style={{width:devicewidth,backgroundColor:'skyblue',borderRadius:40,display:'flex',flexDirection:'column'}}> 
            <Text style={{fontSize:22,backgroundColor:'white',margin:10,borderRadius:10,paddingLeft:10,elevation:4,marginVertical:4}}>
            {note}
            </Text> 
            </View>
                      
           ))}</View>
       ) }
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontsize: 32,
    marginVertical: 40,
    width: devicewidth,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'gray',
    textShadowRadius: 2,

  },

  field: {
    borderColor: 'black',
    borderWidth: 1,
    width: 3 * (devicewidth / 4),
    borderRadius: 40,
    paddingLeft: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  btn: { 
    fontSize: 22,
     height: 50, 
     width: 50, 
     textAlign: "center", 
     backgroundColor: 'skyblue', 
     borderRadius: 50, 
     paddingTop: 8 }
})



export default App;
