import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Navbar from '../navbar';

describe('Header', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Navbar siteTitle="Default Starter" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
