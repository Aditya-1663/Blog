// components/Navbar.js 
"use client";

import React, { useState } from 'react';
import styles from '../style/Navbar.module.css';

import Link from 'next/link'
const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };
  
  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav  className={`${styles.nav} `}>
      <ul className={`${styles.sidebar} ${styles.ul}} ${sidebarVisible?styles.active:''}`}>
        <li   className={`${styles.a } height1`} onClick={hideSidebar}>
          <Link className={styles.a} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </Link>
        </li>
        <li  className={`${styles.li}`}><Link href="/">Home</Link></li>
        <li className={`${styles.li}`}><Link href="#">About</Link></li>
        <li className={`${styles.li}`}><Link href="#">Contact</Link></li>
        <li className={`${styles.li}`}><Link href="#">Login</Link></li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <Link className={`${styles.a } height1`} href="/">Blog</Link></li>
        <li className={`${styles.hideOnMobile} ${styles.li}  ${styles.newli}`}><Link  className={styles.newli}href="/">Home</Link></li>
        <li className={`${styles.hideOnMobile} ${styles.li} ${styles.newli}`}><Link href="#">About</Link></li>
        <li className={`${styles.hideOnMobile} ${styles.li} ${styles.newli}`}><Link href="#">Contact</Link></li>
        <li className={`${styles.hideOnMobile} ${styles.li} ${styles.newli}`}><Link href="#">Login</Link></li>
        <li className={styles.menuButton} onClick={showSidebar}>
          <Link  className={`${styles.a } height1`} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
