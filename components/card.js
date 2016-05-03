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

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      showEnglish: false
    };
  }

  nextCard() {
    this.setState({ showText: false, showEnglish: false });
    this.props.nextCard();
  }

  render() {
    let bottomCard = (
      <TouchableHighlight style={styles.bottomCard} onPress={() => this.setState({ showText: true })}>
        <View>
          <Text style={styles.bottomCardText}>SHOW</Text>
        </View>
      </TouchableHighlight>
    );

    if (this.state.showText) {
      let english = (
        <TouchableHighlight style={styles.englishButton} onPress={() => this.setState({ showEnglish: true })}>
          <Text style={styles.bottomCardText}>🇬🇧</Text>
        </TouchableHighlight>
      );
      if (this.state.showEnglish) {
        english = (
          <Text style={styles.bottomCardText}>{this.props.card.english}</Text>
        );
      }
      bottomCard = (
        <TouchableHighlight style={styles.bottomCard} onPress={this.nextCard.bind(this)}>
          <View>
            <Text style={styles.bottomCardText}>{this.props.card.korean}</Text>
            {english}
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <View style={styles.topContainer}>
        <TouchableHighlight style={styles.topCard} onPress={() => playSound(this.props.card.soundFile)}>
          <View>
              <Text style={styles.topCardText}>🎉</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
        {bottomCard}
      </View>
    );
  }
}

export default Card;
