import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
const StyleSheet = require('../utils/F8StyleSheet');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flexDirection: 'row',
  },
  
  name: {
    fontSize: 15,
    ...Platform.select({
      ios: {
        color: 'red',
      },
      android: {
        color: 'gray',
      },
    })
  }
});

export default function ListItem(props) {
  return (  
    <TouchableOpacity sytle={styles.container} onPress={() => {props.onPress(props.name)}}>
      <View style={styles.container2}>
        <Image source={{uri: props.img}} style={{height: 100, width: 100}}/>
            <View style={{backgroundColor: 'lightgreen', flexDirection: 'column', width: 85 }}>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.name}>{props.type}</Text>
            </View>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
    img: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    onPress: React.PropTypes.func
};
  
  ListItem.default = {
    img: '',
    name: '',
    type: '',
    onPress: () => {}
};

