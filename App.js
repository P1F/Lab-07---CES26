import React from 'react';
import { StyleSheet, View } from 'react-native';
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import calculate from "./logic/calculate";

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <View style={styles.componentApp}>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentApp: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 0,
    top: '20%'
  }
});

export default App