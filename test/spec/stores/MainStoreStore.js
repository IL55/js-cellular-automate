'use strict';

describe('MainStoreStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/MainStoreStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
