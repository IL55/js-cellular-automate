'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AutomatElement from 'components/AutomatElement.js';

describe('AutomatElement', () => {
    let AutomatElementComponent;

    beforeEach(() => {
        AutomatElementComponent = createComponent(AutomatElement);
    });

    it('should have its component name as default className', () => {
        expect(AutomatElementComponent._store.props.className).toBe('AutomatElement');
    });
});
