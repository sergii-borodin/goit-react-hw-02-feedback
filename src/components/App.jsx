import React, { Component } from "react";
import FeedbackInputInterface from "../components/FeedbackInputInterface/FeedbackInputInterface"
import Statistics from "./Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";

class App extends Component{
   state = {
  good: 0,
  neutral: 0,
  bad: 0
  };

  countPositiveFeedbacks = () => this.setState(prevState => ({good: prevState.good += 1 }));  

  countNeutralFeedbacks = () => this.setState(prevState => ({ neutral: prevState.neutral += 1 }));

  countNegativeFeedbacks = () => this.setState(prevState => ({ bad: prevState.bad += 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad; 
    return good * 100 / total;
  } 

  static propTypes = {};
  render() {
    return (
    <div>
        <FeedbackInputInterface
          countPositiveFeedbacks={this.countPositiveFeedbacks}
          countNeutralFeedbacks={this.countNeutralFeedbacks}
          countNegativeFeedbacks={this.countNegativeFeedbacks}
          statistics={this.state} />
        <Statistics stats={this.state} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        <GlobalStyle/>
    </div>
  );
  }
};

export default App