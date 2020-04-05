import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import { Art, Container, Mobile, MobileMenu, Nav, NavItem, NavListWrapper, NonMobile, StyledContainer } from './global';
import Img from 'gatsby-image';
import Scrollspy from 'react-scrollspy';
import { FiMenu as Menu } from 'react-icons/fi';
import styled from 'styled-components';

interface NavbarProps {
	siteTitle?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const renderNavList = (mobile = false) => (
		<NavListWrapper mobile={mobile}>
			<Scrollspy
				items={['Home', 'Page Two', 'Page Three']}
				currentClassName="active"
				offset={-64}
			>
				<NavItem>
					<Link to={`/`}>Home</Link>
				</NavItem>
				<NavItem>
					<Link to={`/about`}>About</Link>
				</NavItem>
			</Scrollspy>
		</NavListWrapper>
	);

	return (
		<StaticQuery
			query={graphql`
            query {
            	me: file(relativePath: { eq: "gatsby-icon.png" }) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            } 
          `}
			render={data => (
				<Nav {...props}>
					<StyledContainer>
						<Art>
							<Link to='/'>
								<Avatar fluid={data.me.childImageSharp.fluid}/>
							</Link>
						</Art>
						
						<NonMobile>
							{renderNavList()}
						</NonMobile>

						<Mobile>
							<MenuButton onClick={toggleMobileMenu}>
								<Menu size={32}/>
							</MenuButton>
						</Mobile>
					</StyledContainer>
					<Mobile>
						{mobileMenuOpen && (
							<MobileMenu>
								<Container>{renderNavList(true)}</Container>
							</MobileMenu>
						)}
					</Mobile>
				</Nav>
			)}
		/>
	);
};

const Avatar = styled(Img)`
  width: 96px;
  height: 96px;
  border-radius: calc(96 / 2 * 1px);
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
