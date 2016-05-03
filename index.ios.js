'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';

import styles from './utils/styles.js';
import { LessonList } from './components/lesson.js';

// React Native doesn't allow dynamic requires for assets so have to require everything here.
const lessons = [
  {
    "name": "Lesson 1",
    "cardList": require("./data/lesson1.json")
  },
  {
    "name": "Lesson 8",
    "cardList": require("./data/lesson8.json")
  },
  {
    "name": "Lesson 9",
    "cardList": require("./data/lesson9.json")
  }
];

class blashcards extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: LessonList,
          title: 'Blashcards',
          passProps: { lessons }
      }}
      />
    );
  }
}

AppRegistry.registerComponent('blashcards', () => blashcards);
