'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AutomatView from 'components/AutomatView.js';

describe('AutomatView', () => {
    let AutomatViewComponent;

    beforeEach(() => {
        AutomatViewComponent = createComponent(AutomatView);
    });

    it('should have its component name as default className', () => {
        expect(AutomatViewComponent._store.props.className).toBe('AutomatView');
    });
});
