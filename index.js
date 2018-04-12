import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
      <Header headerText={'Awesome Albums'} />
      <AlbumList />
    </View>
  );

AppRegistry.registerComponent('albums', () => App);
