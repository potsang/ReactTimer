var React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCoundown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCoundown}/>
      </div>
    );
  }
});

module.exports = Countdown;
