import * as React from 'react';
import Navbar from '../navbar';
import { render, screen } from '@testing-library/react';

describe('Navbar', () => {

	it('should render home', () => {
		render(<Navbar siteTitle={'Home'}/>);

		expect(screen.getByRole('nav')).toHaveTextContent('Home');
		expect(screen.getByRole('nav')).toHaveTextContent('About');

	});
});
