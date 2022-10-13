import React from 'react';

class Widgetsecond extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feed: 0,
  };
  // handleClickResult = () => {
  //   this.setState(prevState => {
  //     return {
  //       feed: (prevState.good / prevState.total) * 100,
  //     };
  //   });
  // };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
        feed: (prevState.good / prevState.total) * 100,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
      };
    });
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
      };
    });
  };

  render() {
    const color = this.state.good <= 5 ? 'widget__value' : 'widget__valueGreen';
    const result = ((this.state.good / this.state.total) * 100).toFixed(1);
    return (
      <section className="section">
        {/* <button
          type="button"
          className="widget__button"
          onClick={this.handleClickResult}
        >
          Resalt
        </button> */}
        <div className="widget__section">
          <p>Шаг 2</p>
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
          <p className="widget__text">
            Total: <span className="widget__value">{this.state.total}</span>
          </p>
          <p className="widget__text">
            Positive feedback:
            <span className="widget__value">
              {result === 'NaN'
                ? 0
                : ((this.state.good / this.state.total) * 100).toFixed(1)}
            </span>
            %
          </p>

          {/* <p className="widget__text">
            Result:{' '}
            <span className={color}>
              {this.state.feed === 'NaN' ? 0 : this.state.feed}
            </span>
            %
          </p> */}
        </div>
      </section>
    );
  }
}
export default Widgetsecond;
