'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 64
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#555555',
    alignSelf: "stretch"
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
  },
  topCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCardText: {
    fontSize: 30
  },
  bottomCardText: {
    fontSize: 30
  },
  englishButton: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1
  }
});
