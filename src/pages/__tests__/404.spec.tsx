import { render, screen } from '@testing-library/react';
import NotFoundPage from '../404';
import * as React from 'react';
import { mocked }from 'ts-jest/utils';
import { useStaticQuery } from 'gatsby';

describe('404 Page', () => {
	beforeEach(() => {
		mocked(useStaticQuery).mockImplementationOnce(({ render }) =>
			render({
				site: {
					siteMetadata: {
						title: `GatsbyJS`,
					},
				},
			})
		)
		
		render(<NotFoundPage/>);
	});

	it('should display NOT FOUND', () => {
		expect(screen.getByRole('heading')).toHaveTextContent('hello there');
	});
});
