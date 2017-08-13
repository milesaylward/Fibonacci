import React, { Component } from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import monokaiSublime from 'react-syntax-highlighter/dist/styles/monokai-sublime';

registerLanguage('javascript', js);

class ShowCode extends Component {
  state = {
    codeVisible: false
  }

  showCode = () => {
    this.setState({ codeVisible: true });
  }

  hideCode = () => {
    this.setState({ codeVisible: false });
  }

  renderCode = () => {
    if(this.state.codeVisible) {
      return (
        <SyntaxHighlighter language='javascript' style={monokaiSublime}>
          {this.props.code}
        </SyntaxHighlighter>
      );
    }
    return <div>{this.props.children}</div>
  }

  renderButtons = () => {
    const { buttonStyle } = this.props;
    if(this.state.codeVisible){
      return (
        <button style={buttonStyle} onClick={this.hideCode}>
          Hide Code
        </button>
      )
    }

    return (
      <button style={buttonStyle} onClick={this.showCode}>
        Show Code for this function
      </button>
    );
  }

  render() {
    return (
      <div style={{...this.props.styles, textAlign: 'left'}}>
        <div style={{textAlign: 'center', paddingBottom: 15}}>
          {this.renderButtons()}
        </div>
        {this.renderCode()}
      </div>
    )
  }
}

export default ShowCode;
