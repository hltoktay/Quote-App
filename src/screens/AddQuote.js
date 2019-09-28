import React, { Component } from "react";
import {
  StatusBar,
  TextInput,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Box, Text } from "react-native-design-utility";

import { observer } from "mobx-react";

import { BookStore } from "../models/Store";

const initialState = {
  author: "",
  description: "",
  read: false
};

@observer
export default class AddNew extends Component {
  state = initialState;

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  addBook() {
    BookStore.addBook(this.state);
    this.setState(initialState);
    this.titleRef.focus();
  }

  render() {
    const { books } = BookStore;

    return (
      <Box f={1} style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <TextInput
          placeholder="author"
          value={this.state.author}
          style={styles.input}
          autoCorrect={false}
          onChangeText={value => this.onChangeText("author", value)}
          ref={author => (this.titleRef = author)}
        />

        <TextInput
          value={this.state.description}
          placeholder="description"
          onChangeText={value => this.onChangeText("description", value)}
          style={styles.input}
          autoCorrect={false}
        />

        <Text style={styles.label}>
          Read? {this.state.read ? "Yes" : "No"}{" "}
        </Text>

        <Switch
          onValueChange={value => this.setState(() => ({ read: value }))}
          value={this.state.read}
        />

        <Button onPress={this.addBook.bind(this)} title="Add Quote" />
        {books.map((book, index) => (
          <Text key={index}>{book.author}</Text>
        ))}
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250
  },
  input: {
    height: 45,
    backgroundColor: "#ededed",
    borderRadius: 3,
    paddingHorizontal: 8,
    marginBottom: 10
  },
  label: {
    marginBottom: 5
  }
});
