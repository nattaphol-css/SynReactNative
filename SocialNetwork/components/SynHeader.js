import React, { Component } from 'react'
import {
  Header,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Center,
  Right,
  Thumbnail
} from 'native-base'
import {
  Image
} from 'react-native'
export default class SynHeader extends Component{
  render() {
    return (
      <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body style={{flex:1, alignItem: 'Center'}}>
        <Thumbnail size={500} source={require('../public/slri.png')}/>
      </Body>
      </Header>
    );
  }
}
