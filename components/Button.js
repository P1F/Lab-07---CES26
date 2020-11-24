import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Button as Bttn } from 'react-native';

class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const bttnColor = this.props.orange ? "#f5923e" : "#919191";
        const bttnWidth = this.props.wide ? { width: '50%' } : { width: '25%' };

        return (
            <View style={[styles.componentButton, bttnWidth]}>
                <Bttn
                    color={bttnColor}
                    onPress={this.handleClick}
                    title={this.props.name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentButton: {
        display: 'flex',
        fontSize: 24,
        marginTop: 0,
        marginRight: 1,
        marginBottom: 0,
        marginLeft: 0,
    }
});

export default Button