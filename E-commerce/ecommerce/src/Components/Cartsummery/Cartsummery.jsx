import { Component } from 'react'

export default class Cartsummery extends Component {
  render() {
    return (
      <section className="cart-summary" aria-label="Cart Summary">
        <h2>Cart Summary</h2>
        <p>
          Items: <span className="cart-count">0</span>
        </p>
        <p>
          Total: <span className="cart-total">$0.00</span>
        </p>
        <button className="btn.primary">Checkout</button>
      </section>
    );
  }
}
