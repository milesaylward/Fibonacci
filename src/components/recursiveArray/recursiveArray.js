import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFibArray } from '../../actions/fibActions';
import ShowCode from '../../code/showCode';
import { RecursiveArrayCode } from '../../code/code';

import './recursiveArray.css';

class RecursiveArray extends Component {
  state = {
    fibNum: '',
    error: null,
    showFibArray: true
  }

  handleInput = (e) => {
    this.setState({
      fibNum: e.target.value,
      error: null
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(this.state.fibNum)
    if(isNaN(num)) {
      this.setState({
        fibNum: '',
        error: 'You must enter a number'
      })
    } else {
      this.props.getFibArray(num);
      this.setState({ fibNum: '' });
    }
  }

  renderErrors = () => {
    if(this.state.error) {
      return (
        <h3 style={{color: `red`}}>{this.state.error}</h3>
      )
    }
    return;
  }

  renderArray = () => {
    if(this.props.fibNumbers.fibArray){
      const { fibArray } = this.props.fibNumbers;

      return (
        <h3 style={{color: `white`, width: `90%`, textAlign: `center`, margin: `0 auto`}}>
          [{fibArray.join(',  ')}]
        </h3>
      )
    }
    return;
  }

  render() {
    const { textStyle, inputStyle, buttonStyle } = style;
    return (
      <div className='recurse-bg'>
        <p style={textStyle}>
          Enter a number here and hit enter to see an array of
          all Fibonacci Numbers from 0 to whatever you enter!
        </p>
        <p style={textStyle}>
          Bear in mind these numbers grow rather rapidly and while it works pretty
          well, in my testing once you reach 1476, which for fun returns 1.3069892237633987e+308,
          after that you simply get Infinity.
        </p>
        <div style={{padding: `50px 0`, textAlign: `center`}} >
          {this.renderErrors()}
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              value={this.state.fibNum}
              onChange={e => this.handleInput(e)}
              style={inputStyle}
            />
          </form>

        </div>
          <ShowCode
            code={RecursiveArrayCode}
            styles={{width: `60%`, margin: `0 auto`}}
            buttonStyle={buttonStyle}>
            {this.renderArray()}
          </ShowCode>
      </div>
    )
  }
}

const style = {
  textStyle: {
    width: `50%`,
    margin: `0 auto`,
    textAlign: `center`,
    color: `white`,
    fontSize: 20
  },
  inputStyle: {
    width: 400,
    height: 25,
    fontSize: 25
  },
  buttonStyle: {
    width: 300,
    height: 30,
    marginTop: 10,
    fontSize: 16
  }
}

const mapStateToProps = state => {
  const { fibNumbers } = state;
  return { fibNumbers };
}

export default connect(mapStateToProps, { getFibArray })(RecursiveArray);
