import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function Map() {
    return (
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    );
  }

  export default Map;   
  
