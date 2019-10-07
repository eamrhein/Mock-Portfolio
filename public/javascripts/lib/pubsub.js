/* eslint-disable require-jsdoc */
// Simple Publish Subscribe State Management
// Taken from https://github.com/hankchizljaw/vanilla-js-state-management/
export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    const self = this;

    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    return self.events[event].push(callback);
  }

  publish(event, data = {}) {
    const self = this;

    if (!self.events.hasOwnProperty(event)) {
      return [];
    }

    return self.events[event].map((callback) => callback(data));
  }
}
