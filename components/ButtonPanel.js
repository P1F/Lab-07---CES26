import Button from "./Button";
import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View } from 'react-native';

class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <View style={styles.componentButtonPanel}>
                <View style={styles.componentButtonParentChild}>
                    <Button name="CE" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} orange />
                </View>
                <View style={styles.componentButtonParentChild}>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} orange />
                </View>
                <View style={styles.componentButtonParentChild}>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} orange />
                </View>
                <View style={styles.componentButtonParentChild}>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} orange />
                </View>
                <View style={styles.componentButtonParentChild}>
                    <Button name="0" clickHandler={this.handleClick} wide />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} orange />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentButtonPanel: {
        backgroundColor: '#858694',
        display: 'flex',
        flexDirection: 'column'
    },
    componentButtonParentChild: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default ButtonPanel