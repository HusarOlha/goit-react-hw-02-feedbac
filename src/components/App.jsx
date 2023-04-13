import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
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
