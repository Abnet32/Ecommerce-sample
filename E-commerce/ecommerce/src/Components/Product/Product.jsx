import { Component } from "react";
import { store_data } from "../../Constant/data";
import ProductEach from "../ProductEach/ProductEach";

export default class Food extends Component {
  render() {
    return (
      <div className="product-list" aria-label="Product List">
        {store_data.products?.map((item, index) => (
          <ProductEach key={index} product={item} />
        ))}
      </div>
    );
  }
}
