// Generated by CoffeeScript 2.1.0
var CFX, StoryTodos, actions, mapActionToProps, mapStateToProps;

import React, {
  Component
} from 'react';

import Input from '../../../StoryView/src/components/input';

import {
  prefixDom
} from 'cfx.dom';

import {
  store
} from 'ReduxServ';

({actions} = store);

import {
  connect
} from 'cfx.react-redux';

import {
  getState
} from './components';

CFX = prefixDom({Input});

StoryTodos = class StoryTodos extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      filter: props.state.filter
    };
    this;
  }

  componentWillReceiveProps(nextProps) {
    var filter;
    ({filter} = nextProps.state);
    this.setState({filter});
    return this;
  }

  render() {
    var c_Input;
    ({c_Input} = CFX);
    return c_Input({
      filter: this.state.filter,
      selector: (function(filter) {
        return this.props.actions.save({
          filter: filter
        });
      }).bind(this),
      blur: function(v) {
        return console.log(v);
      }
    });
  }

};

mapStateToProps = function(state) {
  console.log(state);
  return getState(state.todosApp.todosFilter);
};

mapActionToProps = {
  save: actions.filterSave
};

export default connect(mapStateToProps, mapActionToProps, StoryTodos);