import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

import { tabBarIcons } from "../constant/image";

class TabItem extends PureComponent {

    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName)
    }

    render() {

        const { routeName, isActive } = this.props;

        const icon = tabBarIcons[ isActive ? 'active' : 'inactive' ][routeName];

        return (
            <Box f={1} pt={10} center>
                <TouchableOpacity onPress={this.handlePress} style={styles.button}>
                    <Box mb={3}>
                        <Image style={styles.image} source={icon} />
                    </Box>
                    <Box>
                        <Text size="xs" ls={0.12} color="greyDarker" lowercase>{routeName}</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20
    }
})

export default TabItem;