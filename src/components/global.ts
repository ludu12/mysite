import styled from 'styled-components';

interface MobileProps {
	mobile?: boolean
}

export const Art = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
  ${props => `
    @media (max-width: ${props.theme.screen.md}) {
        max-width: 200px;
    }
  `}
`;

export const Container = styled.div`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }
`;

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${props => props.theme.color.primary};
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${(props: MobileProps) =>
	props.mobile &&
	`
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.regular};
  font-weight: 700;
  
  a {
    text-decoration: none;
    color:${props => props.theme.color.secondary};
  }

  &.active {
    a {
      color:${props => props.theme.color.accent};
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

export const NonMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;
