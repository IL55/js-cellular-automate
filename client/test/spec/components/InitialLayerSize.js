'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import InitialLayerSize from 'components/InitialLayerSize.js';

describe('InitialLayerSize', () => {
    let InitialLayerSizeComponent;

    beforeEach(() => {
        InitialLayerSizeComponent = createComponent(InitialLayerSize);
    });

    it('should have its component name as default className', () => {
        expect(InitialLayerSizeComponent._store.props.className).toBe('InitialLayerSize');
    });
});
