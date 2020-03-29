import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

interface SecondPageProps {
	data?: object;
}

const SecondPage: React.FC<SecondPageProps> = props => {
	return (
		<Layout siteTitle='Page Two'>
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
			<p>{JSON.stringify(props.data)}</p>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	);
};

SecondPage.defaultProps = {
	data: null,
};

export default SecondPage;

export const query = graphql`
	query {
		cms {
			allPosts {
				title
			}
		}
	}
`;
