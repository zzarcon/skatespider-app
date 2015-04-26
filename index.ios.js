'use strict';

var React = require('react-native');
var styles = require('./styles');
var MOCKS = require('./mocks');
var {
  AppRegistry,
  MapView,
  StyleSheet,
  ListView,
  TabBarIOS,
  Image,
  Text,
  View,
} = React;

var skatespider = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      selectedTab: 'map'
    };
  },

  componentDidMount: function() {
    this.fetchSpots();
  },

  fetchSpots: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKS.spots)
    });
  },

  renderMap: function() {
    return (
      <MapView
        style={styles.map}
      />
    );
  },

  renderSpotsList: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSpotRow}
        style={styles.listView}
      />
    );
  },

  renderSpotRow: function(spot) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: spot.image}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text>{spot.title}</Text>
        </View>
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="featured"
          title="Spots list"
          selected={this.state.selectedTab === 'spotList'}
          onPress={() => {
            this.setState({
              selectedTab: 'spotList',
            });
          }}>
          {this.renderSpotsList()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          title="Map"
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
            this.setState({
              selectedTab: 'map'
            });
          }}>
          {this.renderMap('#783E33', 'Map')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('skatespider', () => skatespider);