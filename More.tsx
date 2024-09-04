import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ScreenStackHeaderSubview } from 'react-native-screens';

function More() {
  const navigation = useNavigation();

  const navigateToAbout = () => {
    navigation.navigate('About');
   };

    const navigateToContact = () => {
      navigation.navigate('Contact');
    };

      const navigateToUserGuide = () => {
        navigation.navigate('UserGuideScreen');
  };

  return (
    <View>
      <ListItem bottomDivider onPress={navigateToUserGuide}>
        <ListItem.Content>
          <ListItem.Title >User Guide</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={navigateToContact}>
        <ListItem.Content>
          <ListItem.Title>Contact</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={navigateToAbout}>
        <ListItem.Content>
          <ListItem.Title >About Us</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Language Setting</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Privacy Policy</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Terms & Conditions</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({});

export default More;
