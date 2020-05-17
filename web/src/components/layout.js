import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <div className={styles.preFooterWrapper}>
      <div className={styles.preFooter}>
        <span className={styles.preFooterTitle}>Let's talk!</span>
        <p>I’m currently looking for job opportunities in design, game, &amp; film spaces. 
          If you work in any of these industries, I’d love to pick your brain! 
          Check out <a target='_blank'>my resumé</a> or <a href='mailto:y.smilyanski@gmail.com'>email me</a>. </p>
      </div>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
