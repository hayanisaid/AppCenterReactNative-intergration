/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {

  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Analytics from 'appcenter-analytics';

class App extends React.Component {
  __addCartButtonPressed = () => {

    Analytics.trackEvent('Add to Cart pressed', {
      productName: "PlayStation 4 console'",
      productId: '2443ds5',
      os: 'ios',
      screen: 'AddToCartScreen',
    });
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableHighlight
            style={styles.addToCartButtonStyle}
            onPress={this.__addCartButtonPressed}>
            <Text style={styles.addToCartButtonTextStyle}>Add to Cart </Text>
          </TouchableHighlight>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartButtonTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addToCartButtonStyle: {
    width: 180,
    height: 45,
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#ff0000',
    alignItems: 'center',
  },
});

export default App;
