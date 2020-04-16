import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import { Container, Nav, NavItem, NavListWrapper, StyledContainer } from './global';
import Img from 'gatsby-image';
import Scrollspy from 'react-scrollspy';
import BurgerMenuButton from './buger-menu-button';
import styled from 'styled-components';

interface NavbarProps {
	siteTitle?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const renderNavList = (mobile = false) => (
		<NavListWrapper mobile={mobile}>
			<Scrollspy
				items={['Home', 'Projects']}
				currentClassName="active"
				offset={-64}
			>
				<NavItem>
					<Link to={`/`}>Home</Link>
				</NavItem>
				<NavItem>
					<Link to={`/projects`}>Projects</Link>
				</NavItem>
			</Scrollspy>
		</NavListWrapper>
	);

	return (
		<StaticQuery
			query={graphql`
            query {
            	me: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            } 
          `}
			render={data => (
				<Nav {...props}>
					<StyledContainer>
						<Link to='/'>
							<Avatar fluid={data.me.childImageSharp.fluid}/>
						</Link>
						<BurgerMenuButton open={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
					</StyledContainer>
					{mobileMenuOpen && <Container>{renderNavList(true)}</Container>}
				</Nav>
			)}
		/>
	);
};

const Avatar = styled(Img)`
		width: 48px;
		height: 48px;
	  border-radius: calc(48 / 2 * 1px);
    ${props => `
    @media (min-width: ${props.theme.screen.md}) {
      width: 96px;
  		height: 96px;
 		  border-radius: calc(96 / 2 * 1px);
    }
  `}
`;

const MenuButton = styled.button`
    	border: none;
    	background: none;
    	outline: none;
    	padding: 0;
    	cursor: pointer;
`;

Navbar.defaultProps = {
	siteTitle: ``,
};

export default Navbar;
