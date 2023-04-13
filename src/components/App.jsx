import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics>ljnkjnj</Statistics>
        </Section>
      </>
    );
  }
}

export default App;
