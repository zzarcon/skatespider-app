var {
  StyleSheet
} = require('react-native');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});