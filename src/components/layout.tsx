/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';

import Navbar from './navbar';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import SEO from './seo';
import { Container } from './global';
import GlobalStyles from '../styles/global-styles';

interface LayoutProps {
	children: any
	siteTitle: string
}

const Layout: React.FC<LayoutProps> = (props) => (
	<ThemeProvider theme={theme}>
		<>
			<SEO title={props.siteTitle}/>
			<GlobalStyles/>
			<Navbar/>
			<Container>
				<section id={props.siteTitle}>
					<main>{props.children}</main>
				</section>
			</Container>
		</>
	</ThemeProvider>
);

export default Layout;
