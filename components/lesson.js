'use strict';
import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';

import styles from '../utils/styles.js';
import playSound from '../utils/soundPlayer.js';
import Card from './card.js';

class LessonList extends Component {
  render() {
    return (
      <View style={styles.topContainer}>
        {this.props.lessons.map((lesson, index) => {
          return this.renderRow(lesson.name, index, () => {
            this.props.navigator.push({
              title: lesson.name,
              component: Lesson,
              passProps: {name: lesson.name, lesson: lesson.cardList},
            });
          })
        })}
      </View>
    );
  }

  renderRow(name: string, index, onPress: Function) {
    return (
      <View key={index}>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {name}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
 }
}

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  incrementIndex() {
    let newIndex = this.state.index + 1;
    if (this.props.lesson.length <= newIndex) newIndex = 0;
    this.setState({ index: newIndex });
  }

  render() {
    const currentCard = this.props.lesson[this.state.index];
    playSound(currentCard.soundFile);
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Card index={this.state.index} card={currentCard} nextCard={this.incrementIndex.bind(this)} />
      </View>
    );
  }
}

export { LessonList, Lesson };
