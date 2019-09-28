import React from 'react'
import { Box, Text } from 'react-native-design-utility';
import { Image, StyleSheet } from 'react-native';

import { images } from '../constant/image';

const OnboardingLogo = () => (
    <Box center >
            <Box mb="xl">
              <Image style={styles.image} source={images.logo} />
            </Box>
            <Box>
              <Text size="lg">
                My
                <Text color="redDarkest" size="xl">
                  Quotes
                </Text>
              </Text>
            </Box>
            <Text mt="sm" size="sm">
              Easy to write quotes!
            </Text>
          </Box>
)

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: -70,
    }
})

export default OnboardingLogo;