import React, { Component } from "react";
import Container from "./container/Container";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notifications from "./notifications/Notifications";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    const obj = {};
    obj[key] = this.state[key] + 1;

    this.setState(obj)
  }

  countTotalFeedback = () => 
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round(this.state.good / (this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage, onLeaveFeedback} = this;
    return (
      <Container>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions options={options}
        onLeaveFeedback = {onLeaveFeedback}
        />
        <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics good={good} neutral={neutral} bad={bad} 
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}/> 
        ) : (<Notifications message="No feedback given"></Notifications>)
        }
        </Section>
      </Container>
    );
  }
}
export default App;
