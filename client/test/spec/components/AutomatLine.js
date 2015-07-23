'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AutomatLine from 'components/AutomatLine.js';

describe('AutomatLine', () => {
    let AutomatLineComponent;

    beforeEach(() => {
        AutomatLineComponent = createComponent(AutomatLine);
    });

    it('should have its component name as default className', () => {
        expect(AutomatLineComponent._store.props.className).toBe('AutomatLine');
    });
});
