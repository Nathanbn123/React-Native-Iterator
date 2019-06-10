import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import { ExpoLinksView } from '@expo/samples';

export default function ClearScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>The button has been tapped # times</Text>

        <Button
          title="Clear"
          color="#841584"
          accessibilityLabel="Clear"
        />
      </View>


    </ScrollView>
  );
}

ClearScreen.navigationOptions = {
  title: 'Clears',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
