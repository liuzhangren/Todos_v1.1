import { ddbs as dd } from 'ddeyes'

import React, { Component } from 'react'
import Input from '../../../StoryView/src/components/input'
import List from '../../../StoryView/src/components/list'
import Title from '../../../StoryView/src/components/title'
import { prefixDom } from 'cfx.dom'

import { connect } from 'cfx.react-redux'
import { store } from 'ReduxServ'
{ 
  actions 
  reducers
} = store

import {
  getState
} from './components'

CFX = prefixDom {
  Title
  Input
  List
  'div'
}

class StoryTodos extends Component

  constructor: (props) ->
    
    super props
    @state = 
      filter: props.state.filter
    @

 
  componentWillReceiveProps: (nextProps) ->
    {
      filter
    } = nextProps.state
    @setState {
      filter
    }
    @
    console.log '1'
  render: ->

    {
      c_div
      c_Title
      c_Input
      c_List
    } = CFX

    
    c_div {}
    ,
      c_Title {}
      c_Input
        filter: @props.state.filter
        selector: (
          (filter) ->
            @props.actions.filterSave
              filter: filter
        ).bind @

        blur: (
          (v) ->
            @props.actions.create todo: v
            # console.log store
            console.log store.store.getState().todosRedux.todos
        ).bind @
      
      c_List
        data: store.store.getState().todosRedux.todos          
        isClick: false
        str: ' '
        
        Delete: (
          (key) ->
            # console.log key
            console.log store.store.getState().todosRedux.todos
            @props.actions.removeOne 
              id: key
            console.log data: store.store.getState().todosRedux.todos
        ).bind @ 


        hasClick: (str) ->
          console.log 'key:'
          console.log str         

mapStateToProps = (state) ->
  getState state.todosRedux

mapActionToProps =
  filterSave: actions.filterSave
  create: actions.todosCreate
  removeOne: actions.todosRemoveOne

export default connect(
  mapStateToProps
  mapActionToProps
  StoryTodos
)




