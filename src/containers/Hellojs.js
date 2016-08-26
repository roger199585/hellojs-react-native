import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  Alert,
  Navigator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DefaultComponent from '../components/DefaultComponent';
import ListItem from '../components/ListItem';
import pokemons from '../utils/pokemons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class hellojs extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(pokemons),
    };
  }
  
  //get the information of the GPS
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //AsyncStorage.setItem('position', JSON.stringify(position)) // save the position before
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log(position);
    });
  }
  
  renderScence = (route, navigator) => {
    switch (route.id) {
      case 'detial':
        return (
          <Text>{route.id}</Text>
        )
        break
      default:
        return (
      <ListView
        initialListSize={10}
        style={styles.container}
          dataSource={this.dataSource}
          renderRow={(rowData) => {
              return (
                <ListItem 
                img={rowData.img} 
                name={rowData.name} 
                type={rowData.type} 
                onPress={(name) => {
                  Alert.alert(`You clicked ${name}!!`)
                }} />
              )
            }
          }
        >
          {/*<DefaultComponent title={'123'} /> */}
          {/*
          <ListItem img={pokemons[0].img} name={pokemons[0].name} type={pokemons[0].type} />
          <ListItem img={pokemons[3].img} name={pokemons[3].name} type={pokemons[3].type} />
          <ListItem img={pokemons[6].img} name={pokemons[6].name} type={pokemons[6].type} />
          <ListItem img={pokemons[9].img} name={pokemons[9].name} type={pokemons[9].type} />
          */}
        </ListView>   
      )
    }
  }
  
  render() {
    return (
      
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          {this.props.renderScence}
        }
        style={{padding: 64}}
        />
    );
  }
}
