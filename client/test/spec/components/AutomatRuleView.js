'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import AutomatRuleView from 'components/AutomatRuleView.js';

describe('AutomatRuleView', () => {
    let AutomatRuleViewComponent;

    beforeEach(() => {
        AutomatRuleViewComponent = createComponent(AutomatRuleView);
    });

    it('should have its component name as default className', () => {
        expect(AutomatRuleViewComponent._store.props.className).toBe('AutomatRuleView');
    });
});
