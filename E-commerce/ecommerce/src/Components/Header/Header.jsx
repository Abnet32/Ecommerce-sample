import  { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar">
          <h1>🛒 E-Commerce Product Manager</h1>
          <ul className="nav-links">
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
