import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeToggleButton } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { lightTheme } from '../../utils/Themes';

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{ display: "flex", alignItems: "center", color: theme.logo, marginBottom: '20;', cursor: 'pointer',textDecoration:'none' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ThemeToggleButton onClick={toggleTheme}>
            {theme === lightTheme  ? <FaMoon /> : <FaSun />}
          </ThemeToggleButton>
        <ButtonContainer>
          
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
