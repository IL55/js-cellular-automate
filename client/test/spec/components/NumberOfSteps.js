'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import NumberOfSteps from 'components/NumberOfSteps.js';

describe('NumberOfSteps', () => {
    let NumberOfStepsComponent;

    beforeEach(() => {
        NumberOfStepsComponent = createComponent(NumberOfSteps);
    });

    it('should have its component name as default className', () => {
        expect(NumberOfStepsComponent._store.props.className).toBe('NumberOfSteps');
    });
});
