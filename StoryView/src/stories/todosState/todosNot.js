// Generated by CoffeeScript 2.1.1
var CFX;

import {
  storiesOf
} from '@storybook/react';

import {
  prefixDom
} from 'cfx.dom';

import ListNot from '../../components/list';

CFX = prefixDom({ListNot});

export default function() {
  return storiesOf('TodosState', module).add('Not', () => {
    var c_ListNot;
    ({c_ListNot} = CFX);
    return c_ListNot({
      data: [
        {
          value: 0,
          label: '完成1'
        },
        {
          value: 1,
          label: '完成2'
        }
      ],
      creatList: function(data) {
        return console.log('hello');
      },
      isClick: false,
      str: ' ',
      hasClick: function(str) {
        console.log('key:');
        return console.log(str);
      }
    });
  });
};
