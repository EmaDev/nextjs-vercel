import React from 'react';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const enlaces = [
  {text:"Home", href: "/"},
  {text:"About", href: "/about"},
  {text:"Pricing", href: "/pricing"},
  {text:"Contact", href: "/contact"},
]
export const NavBar = () => {
  return (
    <nav className={styles.menu_container}>
      {
      enlaces.map( ({text, href}) => (
        <ActiveLink key={text} text={text} href={href} />
      ))
      
      }  
    </nav>
  )
}
