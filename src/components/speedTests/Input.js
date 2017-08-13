import React, { Component } from 'react';

class Input extends Component {
  state = {
    fibNum: '',
    error: null,
    safe: true
  }

  handleInput = (e) => {
    this.setState({
      fibNum: e.target.value,
      error: null
    })
  }

  handleSubmit = (e) => {
    const { fibNum, safe } = this.state;
    e.preventDefault();

    this.props.submitAction(fibNum, safe)
    this.setState({
      fibNum: ''
    })
  }

  handleRadio = (e) => {
    const value = e.target.value === 'unsafe' ? false : true;
    this.setState({
      safe: value
    });

  }

  render() {
    const { formContainerStyle, radioContainerStyle, inputStyle } = styles;
    return (
      <div style={formContainerStyle}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div style={radioContainerStyle}>
            <div>
              <label htmlFor='safe'>Live Safely</label>
              <input
                type="radio" name="safety"
                id='safe' value="safe"
                checked={this.state.safe === true}
                onChange={e => this.handleRadio(e)}
              />
            </div>
            <div>
              <label htmlFor='unsafe'>Live Dangerously!</label>
              <input
                type="radio" name="safety"
                id='unsafe' value="unsafe"
                checked={this.state.safe === false}
                onChange={e => this.handleRadio(e)}
              />
            </div>
          </div>
          <input onChange={this.handleInput} value={this.state.fibNum} style={inputStyle}/>
          {
            this.state.error
            ?
            <h3 style={{color: 'red'}}>{this.state.error}</h3>
            :
            <div></div>
          }
        </form>
      </div>
    )
  }
}

const styles = {
  formContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
    textAlign: 'center'
  },
  radioContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 20,
    margin: `0 auto`
  },
  inputStyle: {
    width: 400,
    height: 25,
    fontSize: 25
  },
}

export default Input;
