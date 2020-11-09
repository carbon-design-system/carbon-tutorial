import React, { Component } from 'react';
import './TutorialHeader.scss';
import { Link } from 'react-router-dom';

class TutorialHeader extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <HeaderName element={Link} to="/" prefix="IBM">
          Carbon Tutorial
        </HeaderName>
        <HeaderMenuItem element={Link} to="/repos">
          Repositories
        </HeaderMenuItem>
      </div>
    );
  }
}

export default TutorialHeader;
