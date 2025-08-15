import { Component } from "react";

export default class ProductEach extends Component {
  render() {
    const { name, category, image, rating, description, price, status } =
      this.props.product;

    return (
      <article className="product-card" data-category={category}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className="rating">{rating}</p>
        <p className="desc">{description}</p>
        <p className="price">
          <span className="old-price">${price.old}</span>
          <span className="sale-price">${price.sale}</span>
        </p>
        <p className="status in-stock">{status}</p>
        <div className="card-actions">
          <button className="btn primary">Add to Cart</button>
          <button className="btn secondary">Wishlist</button>
        </div>
      </article>
    );
  }
}
