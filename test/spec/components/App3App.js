'use strict';

describe('App3App', () => {
  let React = require('react/addons');
  let App3App, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    App3App = require('components/App3App.js');
    component = React.createElement(App3App);
  });

  it('should create a new instance of App3App', () => {
    expect(component).toBeDefined();
  });
});
