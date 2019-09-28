import React, { Component } from 'react';
import { StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import { observer } from 'mobx-react'

import BookStore from '../models/Store';

const InitialState = {
    author: '',
    description: '',
  }

@observer
export default class HomeScreen extends Component {

    state = InitialState

    static navigationOptions = {
        title: 'My Quotes'
    }

    toggleRead(book) {
        book.toggleRead();
    }

    delete(book) {
        BookStore.removeBook(book);
    }

    render() {
        const { books } = BookStore

        return (
          <Box f={1} ml="sm">
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>My Library</Text>
            
              
            {
                books.map((book, index) => (
                    <TouchableOpacity key={index} >
                    <Box style={styles.container}>

                    <Text style={styles.quatoTitle} >{book.author}</Text>
                    <Text style={styles.description}>{book.description}</Text>
                   
                    <Text key={index} onPress={() => this.toggleRead.bind(this)}>Read: {book.read ? 'yes': 'no'} </Text>
                    <Text onPress={() => this.delete(book)} >Delete</Text>
                  </Box>
                </TouchableOpacity>
                ))
            }
           
          </Box>
        );
    }
}

const styles = StyleSheet.create({
    title: {
       fontSize: 22,
       marginTop: 10,
       paddingBottom: 10 
    },
    container:{
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor:  'rgba(0, 0, 0, .15)'
    },
    quatoTitle: {
        fontSize: 16
    },
    description: {
        color: 'rgba(0, 0, 0, .4)',
        fontSize: 12,
        marginVertical: 4
    }
})
