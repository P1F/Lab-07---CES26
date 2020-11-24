import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';

class Display extends React.Component {
    static propTypes = {
        value: PropTypes.string
    };

    render() {
        return (
            <View style={styles.componentDisplay}>
                <Text style={styles.componentDisplayChild}>{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentDisplay: {
        backgroundColor: 'white',
        color: 'white',
        textAlign: 'right',
        fontWeight: '200',
        width: '100%',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto'
    },
    componentDisplayChild: {
        fontSize: 40,
        paddingTop: 3.2,
        paddingRight: 11.2,
        paddingBottom: 1.6,
        paddingLeft: 8
    }
});

export default Display
