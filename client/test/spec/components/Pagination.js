'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Pagination from 'components/Pagination.js';

describe('Pagination', () => {
    let PaginationComponent;

    beforeEach(() => {
        PaginationComponent = createComponent(Pagination);
    });

    it('should have its component name as default className', () => {
        expect(PaginationComponent._store.props.className).toBe('Pagination');
    });
});
