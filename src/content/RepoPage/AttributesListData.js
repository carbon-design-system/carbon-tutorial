import React, { Component } from 'react';

var ATTRIBUTE_SET_URL =
  'http://watsonpow01.rch.stglabs.ibm.com/services/attribute_detection_det/api/v1/attribute_sets/';

class AttributeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {},
    };
  }
  fetch() {
    var that = this;
    if (that.props.attributeSetId) {
      fetch(
        ATTRIBUTE_SET_URL +
          that.props.attributeSetId +
          '/attributes?_offset=1&_limit=500&show_disabled=true&include_base=false&version=2019-07-15&_fields=name&_fields=id&_fields=description&_fields=disabled&_fields=*'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(result) {
          that.setState({ data: result });
        });
    }
  }

  componentWillMount() {
    console.log('componentWillMount', this.state);
    this.setState({ loading: true });
    this.fetch();
    this.setState({ loading: false });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }
  render = () => this.props.children(this.state);
}

export default AttributeList;
