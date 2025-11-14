import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(prop) {
    super(prop);
    this.state = { ...prop };
  }

  render() {
    return;
  }
}
