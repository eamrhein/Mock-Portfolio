/* eslint-disable require-jsdoc */
// Simple Publish Subscribe State Management
// Taken from https://github.com/hankchizljaw/vanilla-js-state-management/
import Store from '../store/store.js';

export default class Component {
  constructor(props = {}) {
    const self = this;

    this.render = this.render || function() { };

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }

    if (props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
}
