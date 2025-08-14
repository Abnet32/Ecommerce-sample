import { Component } from "react";
import styles from "./Product.module.css";
// import FoodItem from "../FoodItem/FoodItem";
import { store_data } from "../../Constant/data";

export default class Food extends Component {
  render() {
    return (
      <div className={styles.productlist} aria-label="Product List">
        {store_data?.map((item, index) => {
          const { name, category, image, rating, description, price.old, price.sale, status} = item;
          return (
            <FoodItem
              key={index}
              name={name}
              category={category}
              image={image}
              rating={rating}
                description={description}
                price={price.old}
              status={status}
            />
          );
        })}
      </div>
    );
  }
}
