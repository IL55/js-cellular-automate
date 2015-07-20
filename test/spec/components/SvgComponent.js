'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SvgComponent from 'components/SvgComponent.js';

describe('SvgComponent', () => {
    let SvgComponentComponent;

    beforeEach(() => {
        SvgComponentComponent = createComponent(SvgComponent);
    });

    it('should have its component name as default className', () => {
        expect(SvgComponentComponent._store.props.className).toBe('SvgComponent');
    });
});
