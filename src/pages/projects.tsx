import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

interface ProjectPageProps {
	data?: object;
}

const Projects: React.FC<ProjectPageProps> = props => {
	return (
		<Layout siteTitle='Projects'>
			<h1>Projects</h1>
			<h3>Here's a list of things I've done professionally or otherwise...</h3>
			<p>{JSON.stringify(props.data)}</p>
		</Layout>
	);
};

Projects.defaultProps = {
	data: null,
};


export const query = graphql`
	query {
		cms {
			allProjects {
				title
			}
		}
	}
`;
