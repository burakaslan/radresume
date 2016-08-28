import React, { Component } from 'react';
import { changeFont } from './redux/actions';
import { connect } from 'react-redux';

class Settings extends Component {
  render() {
    return (
      <div className="tools">
        <div className="settings-font">
          <i onClick={() => window.print()}className="material-icons">file_download</i>
          <p className="uppercase">Download</p>
        </div>
        <div className="settings-font">
          <i onClick={() => this.props.dispatch(changeFont())} className="material-icons ">font_download</i>
          <p className="uppercase">Font</p>
        </div>
      </div>
    )
  }
}

export default connect()(Settings);
