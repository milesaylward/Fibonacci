import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Header extends Component {

  handleLinkClick = () => {
    console.log(this.props);
  }
  render() {
    const { textStyle, headerStyle, navStyle, linkStyle } = style;
    return (
      <div className='header' style={headerStyle}>
        <h1 style={{textAlign: `center`}}>Fibonacci Playground</h1>
        <h4 style={textStyle}>
          This app was built to show various ways
          to work with the famed Fibonacci Sequence
          where each subsequent number is the sum of the previous 2
        </h4>
        <div style={navStyle}>
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/recurse-vs-memoization' style={linkStyle}>Speed Tests!</Link>
        </div>
      </div>
    )
  }
}

const style = {
  textStyle: {
    width: `50%`,
    margin: `0 auto`,
    textAlign: `center`
  },
  headerStyle: {
    paddingTop: 25,
    color: `white`,
    backgroundColor: `#23241F`
  },
  navStyle: {
    width: `70%`,
    margin: `0 auto`,
    padding: '10px 0',
    display: `flex`,
    justifyContent: `space-around`,
  },
  linkStyle: {
    color: `white`,
    textDecoration: `none`
  }
}

export default withRouter(Header);
