'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import SelectAutomateName from 'components/SelectAutomateName.js';

describe('SelectAutomateName', () => {
    let SelectAutomateNameComponent;

    beforeEach(() => {
        SelectAutomateNameComponent = createComponent(SelectAutomateName);
    });

    it('should have its component name as default className', () => {
        expect(SelectAutomateNameComponent._store.props.className).toBe('SelectAutomateName');
    });
});
