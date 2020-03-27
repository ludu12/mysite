import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useGraphql } from '../hooks/useGraphql';
import { cachedDataVersionTag } from 'v8';

const GET_POSTS = 'query GetPosts { allPosts { title id state image { publicUrl } brief extended } }';

const SecondPage = (props: SecondPageProps) => {
	
	const {data, loading} = useGraphql(GET_POSTS);
	return (
		<Layout>
			<SEO title="Page two"/>
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
			<p>{JSON.stringify(data)}</p>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	);
};

interface SecondPageProps {
	data?: object;
}

SecondPage.defaultProps = {
	data: null,
};

export default SecondPage;

// export const query = graphql`
// 	query { 
// 		cms {
// 				allPosts { 
// 					title
// 				} 
// 		}
// 	}
// `;
