import React, { Component } from 'react';
import Theme from '../Theme';
import { connect } from 'react-redux';
import './styles.scss';

class Wrapper extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          color: Theme[this.props.theme].fontColor,
          background: Theme[this.props.theme].bodybg,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, null)(Wrapper);
