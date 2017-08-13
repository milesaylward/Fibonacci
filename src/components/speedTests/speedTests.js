import React, { Component } from 'react';
import { connect } from 'react-redux';
import './speedTests.css';
import Input from './Input';
import ShowCode from '../../code/showCode';
import {
  MemoizedCode,
  RecursiveCode,
  WhileCode
} from '../../code/code';


import { getFibSpeeds } from '../../actions/fibActions';

class SpeedTests extends Component {
  renderRecursive = () => {
    const { fibSpeeds } = this.props

    if(fibSpeeds && fibSpeeds.fibRecursive !== '') {
      const { fibRecursive } = fibSpeeds;
      return (
        <div>
          <h3>Fibonacci Number: {fibRecursive.Fib}</h3>
          <h3>Time To Calculate: {fibRecursive.time}ms</h3>
        </div>
      )
    }
    else if (fibSpeeds) {
      return (
        <h3>Playing it safe</h3>
      )
    }

    return <h3>Enter</h3>
  }

  renderWhile = () => {
    const { fibSpeeds } = this.props

    if(fibSpeeds) {
      const { fibWhile } = fibSpeeds;
      return (
        <div>
          <h3>Fibonacci Number: {fibWhile.Fib}</h3>
          <h3>Time To Calculate: {fibWhile.time}ms</h3>
        </div>
      )
    }

    return <h3>A</h3>
  }

  renderMemoized = () => {
    const { fibSpeeds } = this.props

    if(fibSpeeds) {
      const { fibMemoized } = fibSpeeds;
      return (
        <div>
          <h3>Fibonacci Number: {fibMemoized.Fib}</h3>
          <h3>Time To Calculate: {fibMemoized.time}ms</h3>
        </div>
      )
    }

    return <h3>Number</h3>
  }

  render() {
    return (
      <div style={{textAlign: 'center'}} className='speedTest-bg'>
        <div style={{width: `70%`, margin: `0 auto`}}>
          <h1>Speed Tests</h1>
          <p>
            There are a multitude of ways to do everything in life,
            and code is no different. The input on this page will fire
            3 different functions that all do the same thing return the
            number located at that place in the Fibonacci Sequence. However
            their speed and memeory usage varies. The Functions are, a while loop,
            a purely recursive function, and a recursive function with memoization.
          </p>
          <div style={{paddingTop: 20}}>
            <h2>Note</h2>
            <p>
              In my tests the pure recursive function crashed my browser if called
              with numbers over 45. So if the safe radio button is checked it will
              not fire for numbers over 45, if you enter 45 it will take close to 40
              seconds to execute. If you want to try numbers over 45 purely recursive, live dangerously!
            </p>
          </div>
        </div>
        <Input
          submitAction={this.props.getFibSpeeds}
        />
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 40}}>
          <div>
            <h2>Recursive</h2>
            <ShowCode code={RecursiveCode}>
              {this.renderRecursive()}
            </ShowCode>
          </div>
          <div>
            <h2>While Loop</h2>
            <ShowCode code={WhileCode}>
              {this.renderWhile()}
            </ShowCode>
          </div>
          <div>
            <h2>Memoization</h2>
            <ShowCode code={MemoizedCode}>
              {this.renderMemoized()}
            </ShowCode>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fibSpeeds } = state.fibNumbers;

  return { fibSpeeds };
}

export default connect(mapStateToProps, { getFibSpeeds })(SpeedTests);
