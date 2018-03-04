import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  incrementAsync: PropTypes.func,
  isIncrementing: PropTypes.bool,
  decrement: PropTypes.func,
  decrementAsync: PropTypes.func,
  isDecrementing: PropTypes.bool,
  changePage: PropTypes.func,
};

class Home extends React.Component {

  test() {
    axios.get('/api/post/test')
      .then(response => response.data)
      .then(console.log);
  };

  render() {
    const {
      count,
      increment,
      incrementAsync,
      isIncrementing,
      decrement,
      decrementAsync,
      isDecrementing,
      changePage,
    } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>Count: {count}</p>

        <p>
          <button onClick={this.test}>
            test
          </button>
        </p>

        <p>
          <button onClick={increment} disabled={isIncrementing}>
            Increment
          </button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement} disabled={isDecrementing}>
            Decrement
          </button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;