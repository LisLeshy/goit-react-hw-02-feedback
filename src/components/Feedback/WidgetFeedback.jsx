
import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section"; 
import { Notification } from "./Notification";

class WidgetFeedback extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
           
  }
  
  
  onClickBtn = e => {
    this.setState(prevState => {
      return {
        [e.target.innerText]: prevState[e.target.innerText] + 1,
      };
    });
  };

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
    
  
     countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

    render()
    {
      const total = this.countTotalFeedback();
      console.log(total);
        return <>
          <Section title="Please leave feedback">
             <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onClickBtn}
            />
          </Section>
          {total === 0 ? (
            <Notification message="There is no feedback" />) : (
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
              
            </Section>)}
          
        </>
    }
}
export default WidgetFeedback;