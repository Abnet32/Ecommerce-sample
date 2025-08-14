import  { Component } from 'react'
import styles from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.siteheader}>
        <nav className={styles.navbar}>
          <h1>🛒 E-Commerce Product Manager</h1>
          <ul className={styles.navlinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
