import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import styles from './Home.styles';

export default function Home() {
  return (
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.main}>
      <Text>Welcome to Indiassetz Membership Plans</Text>
    </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}
