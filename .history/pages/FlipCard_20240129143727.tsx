import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card';

const YourComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlipCard style={{ width: 200, height: 300 }}>
        {/* Face Side */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Front Content</Text>
        </View>

        {/* Back Side */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Back Content</Text>
        </View>
      </FlipCard>
    </View>
  );
};

export default YourComponent;
