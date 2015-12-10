import styles             from './Header.styl';
import template           from './Header.jade';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return template({styles: styles});
  }
}
