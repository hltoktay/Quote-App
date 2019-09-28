import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

export default class Settings extends Component {
    
    state = { }

    render() {
        return (
            <Box f={1} center>
               <StatusBar barStyle="dark-content" />
                <Text>Settings Screen</Text>
            </Box>
        )
    }
}
