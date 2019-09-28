import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StyleSheet } from 'react-native';
import { inject } from 'mobx-react/native';

import OnboardingLogo from '../commons/onboardingLogo';

@inject('currentUser')
class SplashScreen extends Component {
    
    state = { }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth =  async () => {
        await this.props.currentUser.setupAuth();
    }

    render() {
        return (
          <Box f={1} center style={styles.font}>
             <OnboardingLogo />
          </Box>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    font: {
        fontFamily: 'Cochin',
    }
})
