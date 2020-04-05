import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

interface AboutPageProps {
	data?: object;
}

const About: React.FC<AboutPageProps> = props => {
	return (
		<Layout siteTitle='Page Two'>
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
			<p>{JSON.stringify(props.data)}</p>
		</Layout>
	);
};

About.defaultProps = {
	data: null,
};

export default About;

export const query = graphql`
	query {
		cms {
			allPosts {
				title
			}
		}
	}
`;
