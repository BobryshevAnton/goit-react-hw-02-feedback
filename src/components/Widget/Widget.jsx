import React from 'react';

import './Widget.css';

class Widget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const color = this.state.good <= 5 ? 'widget__value' : 'widget__valueGreen';

    return (
      <section className="section">
        <div className="widget__section">
          <p>Шаг 1</p>
          <h1 className="widget__title">Please leave feedback</h1>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickGood}
          >
            Good
          </button>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickBad}
          >
            Bad
          </button>
          <h2 className="widget__subTitle">Statistics</h2>
          <p className="widget__text">
            Good: <span className={color}>{this.state.good}</span>
          </p>
          <p className="widget__text">
            Neutral: <span className="widget__value">{this.state.neutral}</span>
          </p>
          <p className="widget__text">
            Bad: <span className="widget__value">{this.state.bad}</span>
          </p>
        </div>
      </section>
    );
  }
}
export default Widget;
/*
 */

/*{this.state.good>=5?(className="widget__value"):(className="widget__valueGreen"}

{this.state.good>=5?("widget__value"):("widget__valueGreen"}

 */
